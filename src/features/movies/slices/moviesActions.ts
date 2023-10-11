import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularMovies, fetchMoviesByName } from "../services";
import { MoviesData } from '../domain/Movies';
import { MoviesState } from './moviesSlice';

export const fetchAsyncPopularMovies = createAsyncThunk<MoviesData, void, { state: { moviesReducer: MoviesState }}>
    ('popularMovies/fetch', async (_: void, { getState, rejectWithValue }) => {
        const { moviesReducer: { popular: { page } }} = getState();
        try {
            const nextPage = page + 1;
            return fetchPopularMovies(nextPage);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
})

export const fetchAsyncMoviesByName = createAsyncThunk<MoviesData, string, { state: { moviesReducer: MoviesState }}>
    ('movies/fetchByName', async (query: string, { getState, rejectWithValue }) => {
        const { moviesReducer: { searched: { page } }} = getState();

        try {
            const nextPage = page + 1;
            return fetchMoviesByName(nextPage, query);
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
})