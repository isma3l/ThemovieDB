import { Link, useNavigate } from 'react-router-dom';
import StickyBox from "react-sticky-box"
import { BASE_URL, RATED_MOVIES_URL, QUERY_SEARCH } from "@/constants";
import { SearchBar } from "../searchBar"

export const Header = () => {
    const navigate = useNavigate();

    const handleSearchMovie = (movieName: string) => navigate(`${QUERY_SEARCH}${movieName}`);

    return (
        <StickyBox className="w-full pl-[48px] pr-[48px] bg-custom-color pb-5 pt-8 flex">
            <Link to={BASE_URL} className="text-red-500 font-bold text-lg whitespace-normal uppercase m-auto 
                border border-red-700 p-1.5 px-6 rounded-lg">
                Más populares
            </Link>
            <SearchBar onSearch={handleSearchMovie}/>
            <Link to={RATED_MOVIES_URL} className="text-red-500 font-bold text-sm whitespace-normal uppercase 
                w-64 m-auto border border-red-700 p-0.5 py-2.5 rounded-lg text-center">
                Mis peliculas valoradas
            </Link>
        </StickyBox>
    )
}