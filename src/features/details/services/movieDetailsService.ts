import { getWithOutParams } from "@/lib/api";
import { Movie } from "@/shared";
import { MovieDetailsResponse } from "./movieDetailsResponse";
import { formatDate } from "@/util";

const IMAGEN_URL = "https://image.tmdb.org/t/p/original/";

const mapperToMovieDetails = (movie: MovieDetailsResponse): Movie => {
    return {
        id: movie.id,
        adult: movie.adult,
        title: movie.title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: `${IMAGEN_URL}${movie.poster_path}`,
        releaseDate: formatDate(movie.release_date),
        voteAverage: movie.vote_average,
        genres: movie.genres.map(genre => genre.name),
        languages: movie.spoken_languages.map(language => language.english_name),
    }
}

export const fetchMovieDetails = async (movieId: string): Promise<Movie> => {
    const url = `movie/${movieId}`;
    const movieDetailsResponse = await getWithOutParams<MovieDetailsResponse>(url);
    return mapperToMovieDetails(movieDetailsResponse);
}