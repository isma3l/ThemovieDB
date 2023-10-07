import { get } from "@/lib/api";
import { Movie, MoviesData } from "../domain/Movies";
import { MovieResponse, MoviesDataResponse } from "./moviesApiResponse";
import { formatDate } from "@/util";

const IMAGEN_URL = "https://image.tmdb.org/t/p/original/";

const mapperToMovie = (movie: MovieResponse): Movie => {
    return {
        id: movie.id.toString(),
        adult: movie.adult,
        title: movie.title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: `${IMAGEN_URL}${movie.poster_path}`,
        releaseDate: formatDate(movie.release_date),
        voteAverage: movie.vote_average
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