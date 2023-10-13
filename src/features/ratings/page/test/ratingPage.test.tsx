import { describe, it, expect } from 'vitest';
import { screen } from "@testing-library/react";
import { RatingPage } from '..';
import { renderWithProviders } from '@/util';
import { setupStore } from '@/store/store';
import { getMockMovie, getMockRating } from '@/util/test';
import { Status } from '@/shared';


describe("Rating Page", () => {
    const totalScores = 3;
    const ratings = Array(totalScores).fill(0).map(() => ({ movie: getMockMovie(), rating: getMockRating() }));
    const data = ratings.reduce((acc, next) => {
        return { ...acc, [next.movie.id]: next };
    }, {});

    it("Since the user previously rated some movies, a list of rated movies will be displayed", async () => {
        const store = setupStore({
            ratingReducer: {
                status: Status.Success,
                session:{ id: "1", expire: "Thu Oct 12 2023 21:10:23 GMT+0200" } ,
                ratings: data
            }
        });
        renderWithProviders(<RatingPage />, { store });

        const items = await screen.findAllByRole("listitem");
        expect(items.length).toBe(totalScores);
    });

    it("Since the user did not previously rate any movies, the rating list will be empty", async () => {
        const store = setupStore({
            ratingReducer: {
                status: Status.Success,
                session:{ id: "1", expire: "Thu Oct 12 2023 21:10:23 GMT+0200" } ,
                ratings: {}
            }
        });
        renderWithProviders(<RatingPage />, { store });

        const items = screen.queryAllByRole("listitem");
        expect(items.length).toEqual(0);
        expect(screen.getByText("Aún no has calificado una pelicula.")).toBeInTheDocument();
    });
});