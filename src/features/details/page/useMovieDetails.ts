import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchAsyncMovieDetails } from "../slices";
import { rateMovieAsync, resetRatingStatus } from "@/features/ratings";
import { Rating, Status } from "@/shared";
import { ToastOptions, toast } from "react-toastify";

const toastConfig = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
} as ToastOptions;

export const useMovieDetails = () => {
    const urlParams = useParams();
    const dispatch = useAppDispatch();
    const movie = useAppSelector((state) => state.movieDetailsReducer.movie);
    const status = useAppSelector((state) => state.movieDetailsReducer.status);
    const statusRating = useAppSelector((state) => state.ratingReducer.status);

    const movieId = urlParams.movieId ?? "";

    const handleRating = (rating: Rating) => {
        dispatch(rateMovieAsync(rating));
    }
    
    useEffect(() => {
        dispatch(resetRatingStatus());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAsyncMovieDetails(movieId));
    }, [dispatch, movieId]);

    useEffect(() => {
        if (statusRating === Status.Success) {
            toast.success("Se envio la puntuacion correctamente", toastConfig);
        }

        if (statusRating === Status.Error) {
            toast.error("Ocurrió un error al enviar la puntuación", toastConfig);
        }
    }, [statusRating]);

    return {
        movie,
        hasError: status === Status.Error,
        loading: status === Status.Pending,
        loadingRating: statusRating === Status.Pending,
        handleRating
    }
}