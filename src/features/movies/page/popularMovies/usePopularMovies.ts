import { useEffect } from "react";
import { fetchAsyncPopularMovies, Status } from "../../slices";
import { useAppDispatch, useAppSelector } from "@/store";

export const usePopularMovies = () => {
    const dispatch = useAppDispatch();
    const popularMoviesData = useAppSelector((state) => state.moviesReducer.popular);
    const status = useAppSelector((state) => state.moviesReducer.status);

    const dispatchFetch = () => dispatch(fetchAsyncPopularMovies(popularMoviesData.page));

    useEffect(() => {
        dispatchFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return {
        movies: popularMoviesData.movies,
        fetchMoreMovies: dispatchFetch,
        hasError: status === Status.Error
    }
}