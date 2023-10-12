import { useAppSelector } from "@/store";
import { RatedMovie } from "../types/ratedMovie";
import { RatingItem } from "../components/ratingItem";

export function RatingPage() {
    const ratings = useAppSelector((state) => state.ratingReducer.ratings);
    
    const list: RatedMovie[] = Object.values(ratings);
    const shouldShowNotice = list.length === 0;

    return (
        <div className="w-3/4 flex flex-col sjustify-center mt-16 self-center">
            {list.map(item => <RatingItem key={item.movie.id} ratedMovie={item}/>)}
            { shouldShowNotice && <span className="text-white text-lg">Aún no has calificado una pelicula.</span>}
        </div>
    );
}