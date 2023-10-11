import { Outlet, useNavigate } from 'react-router-dom';
import { SEARCH_URL } from "@/constants";
import { Header } from "../components";

export const MainLayout = () => {
    const navigate = useNavigate();

    const handleSearchMovie = (movieName: string) => navigate(`/${SEARCH_URL}?query=${movieName}`);

    return (
        <div className='bg-custom-color h-full flex flex-col justify-center'>
            <Header handleSearch={handleSearchMovie}/>
            <Outlet />
        </div>
    )
}