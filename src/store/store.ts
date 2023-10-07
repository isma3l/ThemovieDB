import { PreloadedState, configureStore, combineReducers } from '@reduxjs/toolkit';
import { moviesReducer } from "@/features/movies";
import { movieDetailsReducer } from "@/features/details";

const rootReducer = combineReducers({
    moviesReducer,
    movieDetailsReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>;