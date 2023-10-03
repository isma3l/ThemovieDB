import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './shared';
import { PopularMoviesPage, SearchedMoviesPage } from '@/features/movies';
import { BASE, SEARCH } from "@/constants";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={BASE} element={<MainLayout />}>
                    <Route index element={<PopularMoviesPage />} />
                    <Route path={SEARCH} element={<SearchedMoviesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;