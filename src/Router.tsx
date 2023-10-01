import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './shared';
import { PopularMoviesPage } from '@/features/movies';

const base = "/";
//const search = "search";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={base} element={<MainLayout />}>
                    <Route index element={<PopularMoviesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;