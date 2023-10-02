import { ScrollableList } from "../../components/scrollableList";
import { usePopularMovies } from "./usePopularMovies";

export function PopularMoviesPage() {
    const { hasError, movies, fetchMoreMovies } = usePopularMovies();
    
    if (hasError) return (<p className="flex justify-center text-red-600 text-3xl pt-12">
        Hubo un error inténtelo más tarde
    </p>);

    return (
        <ScrollableList movies={movies} fetchMore={fetchMoreMovies} />
    );
}