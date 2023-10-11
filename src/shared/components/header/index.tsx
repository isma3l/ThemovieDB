import { Link } from 'react-router-dom';
import StickyBox from "react-sticky-box"
import { BASE_URL } from "@/constants";
import { SearchBar } from "../searchBar"

export const Header = ({ handleSearch }: { handleSearch: (text: string) => void }) => {
    return (
        <StickyBox className="w-full pl-[48px] pr-[48px] bg-custom-color pb-5 pt-8 flex">
            <Link to={BASE_URL} className="text-red-500 font-bold text-lg whitespace-normal uppercase m-auto border border-red-700 p-1.5 px-6 rounded-lg">Más populares</Link>
            <SearchBar onSearch={handleSearch}/>
            <span className="text-red-500 font-bold text-sm whitespace-normal uppercase w-64 m-auto border border-red-700 p-0.5 py-2.5 rounded-lg text-center">Mis Calificaciones</span>
        </StickyBox>
    )
}