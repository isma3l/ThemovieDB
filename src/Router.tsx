import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './shared';
import { PopularMoviesPage, SearchedMoviesPage } from '@/features/movies';
import { MovieDetailsPage } from "@/features/details";
import { BASE_URL, SEARCH_URL, MOVIE_DETAILS_URL } from "@/constants";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={BASE_URL} element={<MainLayout />}>
                    <Route index element={<PopularMoviesPage />} />
                    <Route path={SEARCH_URL} element={<SearchedMoviesPage />} />
                    <Route path={MOVIE_DETAILS_URL} element={<MovieDetailsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;