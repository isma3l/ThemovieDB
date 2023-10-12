import { describe, it, expect, vi, Mock } from 'vitest';
import { screen } from "@testing-library/react";
import { getMockMovies, renderWithProviders } from "@/util";
import { fetchPopularMovies } from "@/features/movies/services";
import { PopularMoviesPage } from "..";
import { BrowserRouter } from 'react-router-dom';

vi.mock("../../../services");
const mockFetchPopularMovies = fetchPopularMovies as Mock;

describe('Popular movies Page', () => {
  const sizePage = 20;
  
  const renderWithBrowserRouter = () => {
    return renderWithProviders(
      <BrowserRouter>
        <PopularMoviesPage />
      </BrowserRouter>
    );
  };

  it('should render list of 20 movies', async () => {
    mockFetchPopularMovies.mockImplementation((page: number) => getMockMovies(page, sizePage));
    renderWithBrowserRouter();

    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBe(sizePage);
  });

  it('if service fails then should render a error message ', async () => {
    mockFetchPopularMovies.mockRejectedValue("Error getting the movies");
    renderWithBrowserRouter();

    expect(await screen.findByText("Hubo un error inténtelo más tarde")).toBeVisible();
  });
});