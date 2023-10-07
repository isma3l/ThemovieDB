import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MovieDetails } from "../domain/MovieDetails"
import { fetchAsyncMovieDetails } from "./moviesDetailsAction"

export enum Status {
    Pending = "PENDING",
    Loading = "LOADING",
    Success = "SUCCESS",
    Error   = "ERROR"
}

export type MoviesState = {
    movieDetails: MovieDetails | null,
    status: Status,
}

const initialState: MoviesState = {
    movieDetails: null,
    status: Status.Pending
}

const movieDetailsSlice = createSlice({
    name: "movieDetailsReducer",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAsyncMovieDetails.pending, state => {
            state.status = Status.Loading;
        });
        builder.addCase(fetchAsyncMovieDetails.fulfilled, (state, action: PayloadAction<MovieDetails>) => {
            state.status = Status.Success;
            state.movieDetails = action.payload;
        });
        builder.addCase(fetchAsyncMovieDetails.rejected, state => {
            state.status = Status.Error;
        });
    }
});

export const movieDetailsReducer = movieDetailsSlice.reducer;