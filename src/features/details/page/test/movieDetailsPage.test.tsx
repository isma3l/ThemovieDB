import { describe, it, expect, vi, Mock } from 'vitest';
import { screen, waitFor } from "@testing-library/react";
import { MovieDetailsPage } from '..';
import { fetchMovieDetails } from '../../services';
import { fetchNewSession, rateMovie } from "@/features/ratings/services"
import { getMockMovie, getMockRating, renderWithProviders } from '@/util/test';
import userEvent from '@testing-library/user-event';

vi.mock("../../services");
vi.mock("@/features/ratings/services");

describe("Movie Details Page", () => {
    const user = userEvent.setup();
    const mockMovie = getMockMovie();
    const rating = getMockRating();

    const mockRateMovie = rateMovie as Mock;
    (fetchMovieDetails as Mock).mockImplementation(() => mockMovie);
    (fetchNewSession as Mock).mockImplementation(() => ({id: "100", expire: "Thu Oct 12 2023 21:10:23 GMT+0200"}));

    it("Should render movie details", async () => {    
        renderWithProviders(<MovieDetailsPage />);

        expect(screen.getByText("Cargando...")).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
            expect(screen.getByText(mockMovie.overview)).toBeInTheDocument();
            expect(screen.getByText(mockMovie.releaseDate)).toBeInTheDocument();
            expect(screen.getByText(mockMovie.voteAverage)).toBeInTheDocument();
            expect(screen.getByText(mockMovie.popularity)).toBeInTheDocument();
            expect(screen.getByText(mockMovie.languages[0])).toBeInTheDocument();
            expect(screen.getByText(mockMovie.genres[0])).toBeInTheDocument();
        });
    });

     it("A successful notification is displayed when you submit a valid score", async () => {
        renderWithProviders(<MovieDetailsPage />);
        
        await waitFor(async () => {
            await user.type(screen.getByLabelText("rate-input"), rating.value.toString());
            await user.type(screen.getByRole("textbox"), rating.comment);
        });

        await user.click(screen.getByRole("button"));

        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText("Se envio la puntuacion correctamente")).toBeInTheDocument();
    });

    it("A error notification is displayed when the rating service fails", async () => {
        mockRateMovie.mockRejectedValue("Error rating the movie");

        renderWithProviders(<MovieDetailsPage />);
        
        await waitFor(async () => {
            await user.type(screen.getByLabelText("rate-input"), rating.value.toString());
            await user.type(screen.getByRole("textbox"), rating.comment);
        });

        await user.click(screen.getByRole("button"));

        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText("Ocurrió un error al enviar la puntuación")).toBeInTheDocument();
    });
});