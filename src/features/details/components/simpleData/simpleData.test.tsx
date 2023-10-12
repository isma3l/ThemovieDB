import { describe, it, expect } from 'vitest';
import { screen, render } from "@testing-library/react";
import { SimpleData } from '.';

describe("SimpleData Component", () => {
    it("should render a simple data component", () => {
        const label = "Pelicula";
        const value = "Titanic";

        render(<SimpleData label={label} value={value} />)

        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.getByText(value)).toBeInTheDocument();
    });
});