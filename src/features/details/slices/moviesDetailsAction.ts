import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovieDetails } from "../services";
import { MovieDetails } from '../domain/MovieDetails';

export const fetchAsyncMovieDetails = createAsyncThunk<MovieDetails, string>
    ('movieDetails/fetch', async (movieId: string, { rejectWithValue }) => {
        try {
            return fetchMovieDetails(movieId);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
});