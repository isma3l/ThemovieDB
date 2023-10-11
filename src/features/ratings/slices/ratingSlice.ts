import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Session } from "../domain/Session";
import { rateMovieAsync } from "./ratingActions";
import { RatedMovie } from "../types/ratedMovie";
import { Status } from "@/shared";

export type RatingState = {
    session: Session | null;
    ratings: { [key:number]: RatedMovie }
    status: Status;
}

const initialState: RatingState = {
    session: null,
    ratings: {},
    status: Status.Idle
}

const ratingSlice = createSlice({
    name: "ratingReducer",
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<Session>) => {
            state.session = action.payload;
        },
        resetRatingStatus: (state) => {
            state.status = Status.Idle;
        }
    },
    extraReducers: builder => {
        builder.addCase(rateMovieAsync.pending, state => {
            state.status = Status.Pending;
        });
        builder.addCase(rateMovieAsync.fulfilled, (state, action: PayloadAction<RatedMovie>) => {
            const { movie } = action.payload;
            state.ratings[movie.id] = action.payload;
            state.status = Status.Success;        
        });
        builder.addCase(rateMovieAsync.rejected, state => {
            state.status = Status.Error;
        });
    }
});


export const ratingReducer = ratingSlice.reducer;
export const { setSession, resetRatingStatus } = ratingSlice.actions;