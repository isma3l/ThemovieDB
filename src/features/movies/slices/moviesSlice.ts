import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MoviesData } from "../domain/Movies"
import { fetchAsyncPopularMovies } from "./moviesActions"

export enum Status {
    Pending = "PENDING",
    Loading = "LOADING",
    Success = "SUCCESS",
    Error   = "ERROR"
}

export type MoviesState = {
    status: Status,
    popular: MoviesData,
    searched: MoviesData
}

const movieDataEmpty: MoviesData = {
    page: 0,
    movies: []
}

const initialState: MoviesState = {
    status: Status.Pending,
    popular: movieDataEmpty,
    searched: movieDataEmpty 
}

const MoviesSlice = createSlice({
    name: "MoviesReducer",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAsyncPopularMovies.pending, state => {
            state.status = Status.Loading;
        });
        builder.addCase(fetchAsyncPopularMovies.fulfilled, (state, action: PayloadAction<MoviesData>) => {
            const { page, movies } = action.payload;
            
            state.status = Status.Success;
            state.popular.page = page;
            state.popular.movies = state.popular.movies.concat(movies);
        });
        builder.addCase(fetchAsyncPopularMovies.rejected, state => {
            state.status = Status.Error;
        });
    }
});

export const moviesReducer = MoviesSlice.reducer;