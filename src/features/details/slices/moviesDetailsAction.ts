import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovieDetails } from "../services";
import { Movie } from '@/shared';

export const fetchAsyncMovieDetails = createAsyncThunk<Movie, string>
    ('movieDetails/fetch', async (movieId: string, { rejectWithValue }) => {
        try {
            return fetchMovieDetails(movieId);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
});