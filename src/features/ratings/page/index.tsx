import { useAppSelector } from "@/store";
import { RatedMovie } from "../types/ratedMovie";
import { RatingItem } from "../components/ratingItem";

export function RatingPage() {
    const ratings = useAppSelector((state) => state.ratingReducer.ratings);
    const list: RatedMovie[] = Object.values(ratings);

    return (
        <div className="w-3/4 flex flex-col justify-center mt-16 self-center">
            {list.map(item => <RatingItem key={item.movie.id} ratedMovie={item}/>)}
        </div>
    );
}