import { describe, it, expect, vi } from 'vitest';
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { RateForm } from "..";

describe("RateForm Component", () => {
    const user = userEvent.setup();

    it("should render a form", async () => {
        const handleSubmit = vi.fn();

        render(<RateForm handleRating={handleSubmit} loading={false} />);
        
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getByLabelText("rate-input")).toBeInTheDocument();

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
        expect(button).toHaveTextContent("Enviar puntuación");
    })

     it("Since the user writes a valid score, the button is enabled", async () => {
        const handleSubmit = vi.fn();
        const value = "2.5";

        render(<RateForm handleRating={handleSubmit} loading={false} />);

        const input = screen.getByLabelText("rate-input");
        await user.type(input, value);
        
        expect(input).toHaveValue(Number(value));
        expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("Since the user writes a invalid score, the button is disabled", async () => {
        const handleSubmit = vi.fn();
        const value = "120";

        render(<RateForm handleRating={handleSubmit} loading={false} />);

        const input = screen.getByLabelText("rate-input");
        await user.type(input, value);
        
        expect(input).toHaveValue(Number(value));
        expect(screen.getByRole("button")).toBeDisabled();
    });

    it('While sending a score, the "Enviando..." text is displayed and the button is disabled', async () => {
        const handleSubmit = vi.fn();
        const value = "1";

        render(<RateForm handleRating={handleSubmit} loading={true} />);

        const input = screen.getByLabelText("rate-input");
        await user.type(input, value);

        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
        expect(button).toHaveTextContent("Enviando...");
    })

});