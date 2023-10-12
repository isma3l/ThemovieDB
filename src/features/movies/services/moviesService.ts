import { get } from "@/lib/api";
import { MoviesData } from "../domain/Movies";
import { PartialMovie } from "@/shared";
import { MovieResponse, MoviesDataResponse } from "./moviesApiResponse";
import { formatDate, completeImagePath } from "@/util";

const mapperToMovie = (movie: MovieResponse): PartialMovie => {
    return {
        id: movie.id,
        title: movie.title,
        posterPath: completeImagePath(movie.poster_path),
        releaseDate: formatDate(movie.release_date),
    }
}

const fetchMovies = async (url: string): Promise<MoviesData> => {
    const { results, page } = await get<MoviesDataResponse>(url);
    const movies = results.map(mapperToMovie);

    return {
        page,
        movies
    }
}

export const fetchPopularMovies = async (page: number): Promise<MoviesData> => {
    const url = `movie/popular?page=${page}`; 
    return fetchMovies(url);
}

export const fetchMoviesByName = async (page: number, query: string): Promise<MoviesData> => {
    const url = `search/movie?page=${page}&query=${query}`;
    return fetchMovies(url);
}