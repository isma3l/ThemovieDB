import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularMovies } from "../services";
import { MoviesData } from '../domain/Movies';

export const fetchAsyncPopularMovies = 
    createAsyncThunk<MoviesData, number>('popularMovies/fetch', async (page: number, { rejectWithValue }) => {
        try {
            const nextPage = page + 1;
            console.log("holaa");
            return fetchPopularMovies(nextPage);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
})