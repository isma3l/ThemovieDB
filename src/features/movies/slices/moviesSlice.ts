import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MoviesData } from "../domain/Movies"
import { popularMoviesAsyncThunk } from "./moviesActions"

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
        builder.addCase(popularMoviesAsyncThunk.pending, state => {
            state.status = Status.Loading;
        });
        builder.addCase(popularMoviesAsyncThunk.fulfilled, (state, action: PayloadAction<MoviesData>) => {
            const { page, movies } = action.payload;

            state.status = Status.Success;
            state.popular.page = page;
            state.popular.movies = state.popular.movies.concat(movies);
        });
        builder.addCase(popularMoviesAsyncThunk.rejected, state => {
            state.status = Status.Error;
        });
    }
});

export const MoviesReducer = MoviesSlice.reducer;
//export const selectInputFields = (state: RootState) => state.submissionReducer.inputFields;

//const { details, loadingStatus, error, page, limit } = useAppSelector(selectTops);