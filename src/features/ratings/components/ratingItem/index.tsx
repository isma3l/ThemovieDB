import { RatedMovie } from "../../types/ratedMovie";

export const RatingItem = ({ratedMovie}: { ratedMovie: RatedMovie }) => {
    const { movie, rating } = ratedMovie;
    
    return (
        <div key={movie.id} className="flex w-full justify-between border-b-2 mt-10" role="listitem">
            <div className="flex flex-col w-1/2">
                <span className="text-white font-semibold">Pelicula: {movie.title}</span><span></span>
                <span className="text-white font-semibold">Calificacion: {rating.value}</span>
                <span className="text-white font-semibold">Comentario: </span>
                <span className="text-orange-100 font-semibold truncate">{rating.comment}</span>
            </div>
            <div className="w-1/6 flex justify-end">
                <img src={movie.posterPath} className="h-36 mb-3" alt="movie poster"/>
            </div>
        </div>
    );
}