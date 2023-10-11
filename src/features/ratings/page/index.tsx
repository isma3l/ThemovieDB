import { useAppSelector } from "@/store";
import { RatedMovie } from "../types/ratedMovie";

const Item = ({ratedMovie}: { ratedMovie: RatedMovie }) => {
    const { movie, rating } = ratedMovie;
    
    return (
        <div key={movie.id} className="flex">
                    <div>Pelicula: {movie.title}</div>
                    <div>Calificacion: {rating.value}</div>
                    <div>Comentario: </div>
                    <div>{rating.comment}</div>
                </div>
    );
}
export function RatingPage() {
    const ratings = useAppSelector((state) => state.ratingReducer.ratings);

    const list: RatedMovie[] = Object.values(ratings);

    return (
        <div>{list.map(item => <Item key={item.movie.id} ratedMovie={item}/>)}</div>
    );
}