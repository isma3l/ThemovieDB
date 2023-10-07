import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchAsyncMovieDetails, Status } from "../slices";

export const useMovieDetails = () => {
    const urlParams = useParams();
    const dispatch = useAppDispatch();
    const movieDetails = useAppSelector((state) => state.movieDetailsReducer.movieDetails);
    const status = useAppSelector((state) => state.movieDetailsReducer.status);

    const movieId = urlParams.movieId ?? "";

    useEffect(() => {
        dispatch(fetchAsyncMovieDetails(movieId));
    }, [dispatch, movieId]);
    
    return {
        movieDetails,
        hasError: status === Status.Error,
        loading: status === Status.Loading,
    }
}