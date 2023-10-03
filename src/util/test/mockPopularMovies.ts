import { faker } from "@faker-js/faker";
import { Movie } from "@/features/movies/domain/Movies"

export const getMockMovies = (page: number, params?: Partial<Movie>): { page: number, movies: Movie[]} => {
    const sizePage = 20;

    const movies: Movie[] = Array(sizePage).fill(0).map(() => {
        return {
            id: faker.number.int(10000),
            adult: faker.datatype.boolean(),
            title: faker.string.sample(8),
            overview: faker.string.sample(20),
            popularity: faker.number.int({ min: 1, max: 10}),
            posterPath: faker.image.url(),
            releaseDate: faker.date.anytime().toString(),
            voteAverage: faker.number.int({ min: 1, max: 10}),
            ...params
        }
    });

    return {
        page,
        movies
    }
}