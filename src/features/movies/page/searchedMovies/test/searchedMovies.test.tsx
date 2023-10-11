import { describe, it, expect, vi, Mock } from 'vitest';
import { screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { getMockMovies, renderWithProviders } from "@/util";
import { fetchMoviesByName } from "@/features/movies/services";
import { SearchedMoviesPage } from "..";

vi.mock("../../../services");
const mockFetchMoviesByName = fetchMoviesByName as Mock;

describe('Search movies', () => {
  const sizePage = 20;
  const searchedMovie = "blue";
  
  const renderWithMemoryRouter = () => {
    return renderWithProviders(
      <MemoryRouter initialEntries={[`/search?query=${searchedMovie}`]}>
        <SearchedMoviesPage />
      </MemoryRouter>
    );
  };

  it('given a search with the word "blue", it should render 20 movies whose names have the word "blue"', async () => {
    mockFetchMoviesByName.mockImplementation((page: number) => getMockMovies(page, sizePage, { title: searchedMovie}));
    renderWithMemoryRouter();
    
    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBe(sizePage);
    
    const result = await screen.findAllByText(searchedMovie);
    expect(result.length).toBe(sizePage);
  });
  
  it('if service fails then should render a error message ', async () => {
    mockFetchMoviesByName.mockRejectedValue(new Error());
    renderWithMemoryRouter();
    
    expect(await screen.findByText("Hubo un error inténtelo más tarde")).toBeVisible();
  });
});