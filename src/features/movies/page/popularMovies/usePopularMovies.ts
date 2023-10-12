import { useEffect, useCallback } from "react";
import { fetchAsyncPopularMovies } from "../../slices";
import { useAppDispatch, useAppSelector } from "@/store";
import { Status } from "@/shared";

export const usePopularMovies = () => {
    const dispatch = useAppDispatch();
    const { movies } = useAppSelector((state) => state.moviesReducer.popular);
    const status = useAppSelector((state) => state.moviesReducer.status);

    const dispatchFetch = useCallback(() => dispatch(fetchAsyncPopularMovies()), [dispatch]);

    useEffect(() => {
        const hasMovies = movies.length > 0;
        !hasMovies && dispatchFetch();
    }, [dispatchFetch, movies]);
    
    return {
        movies,
        fetchMoreMovies: dispatchFetch,
        hasError: status === Status.Error
    }
}