import { Movie, Rating } from "@/shared";

export type RatedMovie = {
    movie: Movie | null;
    rating: Rating;
};