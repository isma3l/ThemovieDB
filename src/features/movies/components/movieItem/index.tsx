import { Link } from 'react-router-dom';
import { MOVIE_DETAILS } from "@/constants";
import { Movie } from "../../domain/Movies";

export const MovieItem = ({movie: {id, title, releaseDate, posterPath}}: {movie: Movie}) => {
    return (
        <Link to={`${MOVIE_DETAILS}/${id}`} className="flex flex-col w-56 h-[25rem]" role="listitem">
            <img src={posterPath} className="h-80 rounded-2xl mb-3" alt="movie poster"/>
            <span className="text-white text-2xl mb-1 truncate">{title}</span>
            <span className="text-orange-900 text-sm">{releaseDate}</span>
        </Link>
    )
}