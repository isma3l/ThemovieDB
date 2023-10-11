import { Link } from 'react-router-dom';
import StickyBox from "react-sticky-box"
import { BASE_URL } from "@/constants";
import { SearchBar } from "../searchBar"

export const Header = ({ handleSearch }: { handleSearch: (text: string) => void }) => {
    return (
        <StickyBox className="w-full pl-[48px] pr-[48px] bg-custom-color pb-5 pt-8 flex">
            <Link to={BASE_URL} className="text-red-500">Peliculas</Link>
            <SearchBar onSearch={handleSearch}/>
            <span className="text-red-500">Mis Puntuaciones</span>
        </StickyBox>
    )
}