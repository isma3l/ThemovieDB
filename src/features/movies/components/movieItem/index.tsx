import { Movie } from "../../domain/Movies";

export const MovieItem = ({movie: {title, releaseDate, posterPath}}: {movie: Movie}) => {
    return (
        <div className="flex flex-col w-56 h-[25rem]">
            <img src={posterPath} className="h-80 rounded-2xl mb-3" />
            <span className="text-white text-2xl mb-1 truncate">{title}</span>
            <span className="text-orange-900 text-sm">{releaseDate}</span>
        </div>
    )
}