import { configureStore } from '@reduxjs/toolkit';
import { MoviesReducer } from "@/features/movies";

const store = configureStore({
    reducer: {
        MoviesReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;