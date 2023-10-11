import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { MoviesData } from "../domain/Movies"
import { fetchAsyncPopularMovies, fetchAsyncMoviesByName } from "./moviesActions"
import { Status } from "@/shared"

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
    status: Status.Idle,
    popular: movieDataEmpty,
    searched: movieDataEmpty 
}

const moviesSlice = createSlice({
    name: "moviesReducer",
    initialState,
    reducers: {
        resetSearch: (state) => {
            state.searched = movieDataEmpty;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAsyncPopularMovies.pending, state => {
            state.status = Status.Pending;
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
        builder.addCase(fetchAsyncMoviesByName.fulfilled, (state, action: PayloadAction<MoviesData>) => {
            const { page, movies } = action.payload;

            state.status = Status.Success;
            state.searched.page = page;
            state.searched.movies = state.searched.movies.concat(movies);
        });
        builder.addCase(fetchAsyncMoviesByName.rejected, state => {
            state.status = Status.Error;
        });
    }
});

export const { resetSearch } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;