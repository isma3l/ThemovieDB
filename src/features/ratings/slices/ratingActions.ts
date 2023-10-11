import { createAsyncThunk } from "@reduxjs/toolkit";
import { Session } from "../domain/Session";
import { fetchNewSession, rateMovie } from "../services";
import { RatingState, setSession } from "./ratingSlice";
import { Rating } from "@/shared";
import { MovieDetailsState } from "@/features/details";
import { RatedMovie } from "../types/ratedMovie";

const isValidSession = (session: Session | null) => {
    if (session) {
        const now = new Date();
        const expireAt = new Date(session.expire);
        return now < expireAt;
    }
    return false;
}
export const rateMovieAsync = createAsyncThunk<RatedMovie, Rating, { state: { ratingReducer: RatingState, movieDetailsReducer:  MovieDetailsState}}>
    ('rate/movie', async (rating: Rating, { getState, rejectWithValue, dispatch }) => {
        const { ratingReducer: { session }, movieDetailsReducer: { movie } } = getState();
        try {
            if (movie === null) throw new Error("Movie cannot be undefined");
            
            let newSession = session;
            if (!isValidSession(session)) {
                newSession = await fetchNewSession();
                dispatch(setSession(newSession));    
            }

            await rateMovie(rating, movie.id, newSession?.id);
            
            return { 
                movie,
                rating
            };
        } catch (error: unknown) {
            return rejectWithValue(error);
        }
});