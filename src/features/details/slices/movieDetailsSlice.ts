import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Movie } from "@/shared"
import { fetchAsyncMovieDetails } from "./moviesDetailsAction"

export enum Status {
    Pending = "PENDING",
    Loading = "LOADING",
    Success = "SUCCESS",
    Error   = "ERROR"
}

export type MovieDetailsState = {
    movie: Movie | null,
    status: Status,
}

const initialState: MovieDetailsState = {
    movie: null,
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
        builder.addCase(fetchAsyncMovieDetails.fulfilled, (state, action: PayloadAction<Movie>) => {
            state.status = Status.Success;
            state.movie = action.payload;
        });
        builder.addCase(fetchAsyncMovieDetails.rejected, state => {
            state.status = Status.Error;
        });
    }
});

export const movieDetailsReducer = movieDetailsSlice.reducer;