import { describe, it, expect, vi } from 'vitest';
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getMockMovie } from '@/util/test';
import { MovieItem } from "./index";

describe("Component MovieItem", () => {
    const mockMovie = getMockMovie();

    it("should render a movie item", () => {
        render(<MovieItem movie={mockMovie} />, { wrapper: BrowserRouter});

        expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
        expect(screen.getByText(mockMovie.releaseDate)).toBeInTheDocument();
        expect(screen.getByAltText("movie poster")).toBeInTheDocument();
    });

    it("When the user clicks on the component it should redirect to its detail page", async () => {
        const user = userEvent.setup()
        const history = createMemoryHistory();
        history.push = vi.fn();

       render(
            <Router location={history.location} navigator={history}>
                <MovieItem movie={mockMovie} />
            </Router>
        );

        const component = screen.getByRole("listitem");
        await user.click(component);

        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '',
                pathname: `/movie/${mockMovie.id}`,
                search: ''
            },
            undefined,
            expect.anything()
        );
    });
});