import { describe, it, expect, vi, Mock } from 'vitest';
import { screen } from "@testing-library/react";
import { getMockMovies, renderWithProviders } from "@/util";
import { fetchPopularMovies } from "@/features/movies/services";
import { PopularMoviesPage } from "..";

vi.mock("../../../services");
const mockFetchPopularMovies = fetchPopularMovies as Mock;

describe('Popular movies', () => {
  const sizePage = 20;
  
  it('should render list of 20 movies', async () => {
    mockFetchPopularMovies.mockImplementation((page: number) => getMockMovies(page, sizePage));
    renderWithProviders(<PopularMoviesPage />);

    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBe(sizePage);
  });

  it('if service fails then should render a error message ', async () => {
    mockFetchPopularMovies.mockRejectedValue(new Error());
    renderWithProviders(<PopularMoviesPage />);

    expect(await screen.findByText("Hubo un error inténtelo más tarde")).toBeVisible();
  });
});