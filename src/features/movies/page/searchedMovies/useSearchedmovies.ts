import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { useQueryParams } from "@/shared/hooks";
import { fetchAsyncMoviesByName, resetSearch } from "../../slices";
import { Status } from "@/shared";

export const useSearchedMovies = () => {
    const dispatch = useAppDispatch();
    const { query } = useQueryParams();

    const { movies } = useAppSelector((state) => state.moviesReducer.searched);
    const status = useAppSelector((state) => state.moviesReducer.status);

    const dispatchFetch = useCallback(() => dispatch(fetchAsyncMoviesByName(query)), [dispatch, query]);

    useEffect(() => {
        dispatch(resetSearch());
        dispatchFetch();
    }, [dispatch, dispatchFetch, query]);
    
    return {
        movies,
        fetchMoreMovies: dispatchFetch,
        hasError: status === Status.Error
    }
}