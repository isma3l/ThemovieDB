import { describe, it, expect, vi, Mock } from 'vitest';
import { screen, waitFor } from "@testing-library/react";
import { MovieDetailsPage } from '..';
import { fetchMovieDetails } from '../../services';
import { fetchNewSession, rateMovie } from "@/features/ratings/services"
import { getMockMovie, renderWithProviders } from '@/util/test';
import userEvent from '@testing-library/user-event';

vi.mock("../../services");
vi.mock("@/features/ratings/services");

const mockFetchMovieDetails = fetchMovieDetails as Mock;
const mockFetchNewSession = fetchNewSession as Mock;
const mockRateMovie = rateMovie as Mock;

describe("Movie Details Page", () => {
    it("Should render movie details", async () => {
        const mockMovie = getMockMovie();
        mockFetchMovieDetails.mockImplementation(() => mockMovie);

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
        const user = userEvent.setup();
        const mockMovie = getMockMovie();
        const value = "2.5";
        const comment = "the best movie";

        mockFetchMovieDetails.mockImplementation(() => mockMovie);
        mockFetchNewSession.mockImplementation(() => ({id: "100", expire: "Thu Oct 12 2023 21:10:23 GMT+0200"}));

        renderWithProviders(<MovieDetailsPage />);
        
        await waitFor(async () => {
            await user.type(screen.getByLabelText("rate-input"), value);
            await user.type(screen.getByRole("textbox"), comment);
        });

        await user.click(screen.getByRole("button"));

        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText("Se envio la puntuacion correctamente")).toBeInTheDocument();
    });

    it("A error notification is displayed when the rating service fails", async () => {
        const user = userEvent.setup();
        const mockMovie = getMockMovie();
        const value = "2.5";
        const comment = "the best movie";

        mockFetchMovieDetails.mockImplementation(() => mockMovie);
        mockFetchNewSession.mockImplementation(() => ({id: "100", expire: "Thu Oct 12 2023 21:10:23 GMT+0200"}));
        mockRateMovie.mockRejectedValue("Error rating the movie");

        renderWithProviders(<MovieDetailsPage />);
        
        await waitFor(async () => {
            await user.type(screen.getByLabelText("rate-input"), value);
            await user.type(screen.getByRole("textbox"), comment);
        });

        await user.click(screen.getByRole("button"));

        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText("Ocurrió un error al enviar la puntuación")).toBeInTheDocument();
    });
});