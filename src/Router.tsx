import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './shared';
import { PopularMoviesPage } from '@/features/movies';
import { BASE_URL, SEARCH_URL, MOVIE_DETAILS_URL, RATED_MOVIES_URL } from "@/constants";
import { Suspense, lazy } from 'react';

const MovieDetailsPage = lazy(() => import("@/features/details"));
const SearchedMoviesPage = lazy(() => import("@/features/movies"));
const RatedMoviesPage = lazy(() => import("@/features/ratings"));

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={BASE_URL} element={<MainLayout />}>
                    <Route index element={<PopularMoviesPage />} />
                    <Route path={SEARCH_URL} element={<Suspense><SearchedMoviesPage /></Suspense>} />
                    <Route path={MOVIE_DETAILS_URL} element={<Suspense><MovieDetailsPage /></Suspense>} />
                    <Route path={RATED_MOVIES_URL} element={<Suspense><RatedMoviesPage /></Suspense>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;