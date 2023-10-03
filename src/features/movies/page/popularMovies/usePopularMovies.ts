import { useEffect, useCallback } from "react";
import { fetchAsyncPopularMovies, Status } from "../../slices";
import { useAppDispatch, useAppSelector } from "@/store";

export const usePopularMovies = () => {
    const dispatch = useAppDispatch();
    const { movies } = useAppSelector((state) => state.moviesReducer.popular);
    const status = useAppSelector((state) => state.moviesReducer.status);

    const dispatchFetch = useCallback(() => dispatch(fetchAsyncPopularMovies()), [dispatch]);

    useEffect(() => {
        dispatchFetch();
    }, [dispatchFetch]);
    
    return {
        movies,
        fetchMoreMovies: dispatchFetch,
        hasError: status === Status.Error
    }
}