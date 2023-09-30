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

export function PopularMovies() {
    const movies = [
        {title: "Hacker: Trust No One nadie", releaseDate: "Feb, 8 2022", posterPath: "https://image.tmdb.org/t/p/original/91pB7MxquMeFbeMHamslCKk5wNZ.jpg"},
        {title: "Once Upon a Crime l", releaseDate: "Sep 13, 2023", posterPath: "https://image.tmdb.org/t/p/original/5FFpXoNpHdmx4hYEQOjtgotOH4b.jpg"},
        {title: "Post Mortem 3", releaseDate: "Sep 24, 2023", posterPath: "https://image.tmdb.org/t/p/original/pGahnC1yoYBGSXB3iDHWAT3kLlp.jpg"},
        {title: "Titanic w", releaseDate: "Oct 22, 2022", posterPath: "https://image.tmdb.org/t/p/original/2lEyzOq6ILNgBpLLpTRckQhbNNt.jpg"},
        {title: "Interestelar 2", releaseDate: "Mar 11, 2018", posterPath: "https://image.tmdb.org/t/p/original/d6bLkMx0vd3TBAcpirPYBw48oDV.jpg"},
        {title: "Hospital de ayer", releaseDate: "Feb, 8 2022", posterPath: "https://image.tmdb.org/t/p/original/wlKf5ysfdxEn2cvyUS9sK9nB09p.jpg"},
        {title: "Monitor led", releaseDate: "Sep 13, 2023", posterPath: "https://image.tmdb.org/t/p/original/bdN82tU8pzimqhiS5NIUMjRluDs.jpg"},
        {title: "Post Mortem s", releaseDate: "Sep 24, 2023", posterPath: "https://image.tmdb.org/t/p/original/pGahnC1yoYBGSXB3iDHWAT3kLlp.jpg"},
        {title: "Remix 3402 w", releaseDate: "Oct 22, 2022", posterPath: "https://image.tmdb.org/t/p/original/7mHJXInzdsvsbcLYTpUCCo1VtHd.jpg"},
        {title: "Nadie sabe a", releaseDate: "Mar 11, 2018", posterPath: "https://image.tmdb.org/t/p/original/ly7VKdl5zA1Ejl48qFICAlQ3MKK.jpg"}
    ] as Movie[];

    return (
        <div className="flex flex-col">
            <div className="grid gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center pt-5"
            >
            {movies.map((movie) => (
                <MovieItem key={movie.title} movie={movie} />
            ))}
            </div>
        </div>
    );
}