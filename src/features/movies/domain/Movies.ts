export interface MoviesData {
    page: number;
    movies: Movie[];
}

export interface Movie {
    id: number;
    adult: boolean;
    title: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    voteAverage: number;
}