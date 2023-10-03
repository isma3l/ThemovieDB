import { describe, it, expect, vi, Mock } from 'vitest';
import { screen } from "@testing-library/react";
import { getMockMovies, renderWithProviders } from "@/util";
import { fetchMoviesByName } from "@/features/movies/services";
import { SearchedMoviesPage } from "..";

vi.mock("../../../services");
const mockFetchMoviesByName = fetchMoviesByName as Mock;

describe('Search movies', () => {
  const sizePage = 20;
  
  it('should render list of 20 movies', async () => {
    mockFetchMoviesByName.mockImplementation((page: number) => getMockMovies(page));
    renderWithProviders(<SearchedMoviesPage />);

    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBe(sizePage);
  });

/*   it('if service fails then should render a error message ', async () => {
    mockFetchPopularMovies.mockRejectedValue(new Error());
    renderWithProviders(<PopularMoviesPage />);

    expect(await screen.findByText("Hubo un error inténtelo más tarde")).toBeVisible();
  }); */
});