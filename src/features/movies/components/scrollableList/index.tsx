import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@/shared/components";
import { Movie } from "../../domain/Movies";
import { MovieItem } from "../movieItem";

export const ScrollableList = ({ movies, fetchMore }: { movies: Movie[], fetchMore: () => void }) => {
    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={fetchMore}
            hasMore={true}
            loader={<Spinner className="sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5"/>}
            className="grid gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center pt-5"
        >
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </InfiniteScroll>
    );
}