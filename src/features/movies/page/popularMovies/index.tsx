import { ScrollableList } from "../../components/scrollableList";
import { usePopularMovies } from "./usePopularMovies";

export function PopularMoviesPage() {
    const { movies, fetchMoreMovies } = usePopularMovies();
    
    return (
        <ScrollableList movies={movies} fetchMore={fetchMoreMovies} />
    );
}