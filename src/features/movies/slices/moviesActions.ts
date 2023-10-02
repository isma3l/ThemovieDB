import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularMovies } from "../services";
import { MoviesData } from '../domain/Movies';

export const fetchAsyncPopularMovies = 
    createAsyncThunk<MoviesData, number>('popularMovies/fetch', async (page: number, { rejectWithValue }) => {
        try {
            const nextPage = page + 1;
            return fetchPopularMovies(nextPage);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
})