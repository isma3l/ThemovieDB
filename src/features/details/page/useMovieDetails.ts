import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchAsyncMovieDetails } from "../slices";
import { rateMovieAsync } from "@/features/ratings";
import { Rating, Status } from "@/shared";

export const useMovieDetails = () => {
    const urlParams = useParams();
    const dispatch = useAppDispatch();
    const movie = useAppSelector((state) => state.movieDetailsReducer.movie);
    const status = useAppSelector((state) => state.movieDetailsReducer.status);

    const movieId = urlParams.movieId ?? "";

    const handleRating = (rating: Rating) => {
        dispatch(rateMovieAsync(rating));
    }

    useEffect(() => {
        dispatch(fetchAsyncMovieDetails(movieId));
    }, [dispatch, movieId]);
    
    return {
        movie,
        hasError: status === Status.Error,
        loading: status === Status.Loading,
        handleRating
    }
}