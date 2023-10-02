import { describe, it, expect, vi } from 'vitest';
import { screen } from "@testing-library/react";
import { getMockPopularMovies, renderWithProviders } from "@/util";
import { PopularMoviesPage } from ".";

vi.mock("../../services", () => ({
    fetchPopularMovies: vi.fn((page: number) => getMockPopularMovies(page))
}));

describe('Popular movies', () => {
  it('true to be true', async () => {
    const sizePage = 20;
    renderWithProviders(<PopularMoviesPage />);

    //const images = await screen.findAllByAltText("movie poster");
    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBe(sizePage);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});