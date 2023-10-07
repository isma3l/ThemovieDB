export interface MovieDetails {
    id: number;
    adult: boolean;
    title: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    voteAverage: number;
    languages: string[];
    genres: string[];
    homepage: string;
}