import { ScrollableList } from "../../components/scrollableList";
import { useSearchedMovies } from "./useSearchedmovies";

export function SearchedMoviesPage() {
    const { movies, fetchMoreMovies, hasError } = useSearchedMovies();

    if (hasError) return (<p className="flex justify-center text-red-600 text-3xl pt-12">
        Hubo un error inténtelo más tarde
    </p>);

    return (
        <ScrollableList movies={movies} fetchMore={fetchMoreMovies} />
    );
}