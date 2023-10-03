import { Outlet, useNavigate } from 'react-router-dom';
import { SEARCH } from "@/constants";
import { Header } from "../components";

export const MainLayout = () => {
    const navigate = useNavigate();

    const handleSearchMovie = (movieName: string) => navigate(`/${SEARCH}?query=${movieName}`);

    return (
        <div className='bg-custom-color h-full'>
            <Header handleSearch={handleSearchMovie}/>
            <Outlet />
        </div>
    )
}