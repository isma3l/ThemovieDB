import { describe, it, expect } from 'vitest';
import { screen, render } from "@testing-library/react";
import { RatingItem } from '.';
import { getMockMovie, getMockRating } from '@/util/test';

describe("RatingItem Component", () => {
    it("should render a rating item component", () => {
        const mockMovie = getMockMovie();
        const mockRating = getMockRating();

        const mockRatedMovie = {
            movie: mockMovie,
            rating: mockRating
        };
        render(<RatingItem ratedMovie={mockRatedMovie} />)

        expect(screen.getByText(`Pelicula: ${mockMovie.title}`)).toBeInTheDocument();
        expect(screen.getByText(`Calificacion: ${mockRating.value}`)).toBeInTheDocument();
        expect(screen.getByText(mockRating.comment)).toBeInTheDocument();
        expect(screen.getByAltText("movie poster")).toBeInTheDocument();
    });
});