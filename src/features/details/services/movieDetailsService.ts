import { getWithOutParams } from "@/lib/api";
import { Movie } from "@/shared";
import { MovieDetailsResponse } from "./movieDetailsResponse";
import { completeImagePath, formatDate } from "@/util";

const mapperToMovieDetails = (movie: MovieDetailsResponse): Movie => {
    return {
        id: movie.id,
        adult: movie.adult,
        title: movie.title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: completeImagePath(movie.poster_path),
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