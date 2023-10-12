import { faker } from "@faker-js/faker";
import { Movie } from "@/shared"

export const getMockMovie = (params?: Partial<Movie>): Movie => {
    return {
        id: faker.number.int(10000),
        adult: faker.datatype.boolean(),
        title: faker.string.sample(8),
        overview: faker.string.sample(20),
        popularity: faker.number.int({ min: 11, max: 20}),
        posterPath: faker.image.url(),
        releaseDate: faker.date.anytime().toString(),
        voteAverage: faker.number.int({ min: 1, max: 10}),
        languages: [faker.string.sample(4)],
        genres: [faker.string.sample(4)],
        ...params
    }
}

export const getMockMovies = (page: number, sizePage: number, params?: Partial<Movie>): { page: number, movies: Movie[]} => {
    const movies: Movie[] = Array(sizePage).fill(0).map(() => getMockMovie(params));

    return {
        page,
        movies
    }
}