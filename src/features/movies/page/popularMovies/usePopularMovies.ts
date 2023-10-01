import { useEffect } from "react";
import { popularMoviesAsyncThunk } from "../../slices";
import { useAppDispatch, useAppSelector } from "@/store";

export const usePopularMovies = () => {
    const dispatch = useAppDispatch();
    const popularMoviesData = useAppSelector((state) => state.MoviesReducer.popular);
    
    const dispatchFetch = () => dispatch(popularMoviesAsyncThunk(popularMoviesData.page));

    useEffect(() => {
        dispatchFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return {
        movies: popularMoviesData.movies,
        fetchMoreMovies: dispatchFetch
    }
}