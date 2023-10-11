import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Session } from "../domain/Session";
import { rateMovieAsync } from "./ratingActions";
import { RatedMovie } from "../types/ratedMovie";

export enum Status {
    Pending = "PENDING",
    Loading = "LOADING",
    Success = "SUCCESS",
    Error   = "ERROR"
}

export type RatingState = {
    session: Session | null;
    ratings: { [key:number]: RatedMovie }
    status: Status;
}

const initialState: RatingState = {
    session: null,
    ratings: {},
    status: Status.Pending
}

const ratingSlice = createSlice({
    name: "ratingReducer",
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<Session>) => {
            state.session = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(rateMovieAsync.pending, state => {
            state.status = Status.Pending;
        });
        builder.addCase(rateMovieAsync.fulfilled, (state, action: PayloadAction<RatedMovie>) => {
            const { movie } = action.payload;
            if (movie) {
                state.ratings[movie.id] = action.payload;
            }            
        });
        builder.addCase(rateMovieAsync.rejected, state => {
            state.status = Status.Error;
        });
    }
});


export const ratingReducer = ratingSlice.reducer;
export const { setSession } = ratingSlice.actions;