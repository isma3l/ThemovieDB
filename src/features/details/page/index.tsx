import { useMovieDetails } from "./useMovieDetails";

export function MovieDetailsPage() {
    const { hasError, movieDetails, loading } = useMovieDetails();
    
    if (hasError) return (<p className="flex justify-center text-red-600 text-3xl pt-12">
        Hubo un error inténtelo más tarde
    </p>);

    if (loading) return "Cargando";

    return (
        <>
            <div>
                <span>titulo</span>
                <span>{movieDetails?.title}</span>
            </div>
            <div>
                <span>Overview</span>
                <span>{movieDetails?.overview}</span>
            </div>
            <div>
                <span>popularidad</span>
                <span>{movieDetails?.popularity}</span>
            </div>
            <div>
                <span>votacion</span>
                <span>{movieDetails?.voteAverage}</span>
            </div>
            <div>
                <span>fecha de estreno</span>
                <span>{movieDetails?.releaseDate}</span>
            </div>
            <div>
                <span>homepage</span>
                <span>{movieDetails?.homepage}</span>
            </div>
            <div>
                <span>generos</span>
                {movieDetails?.genres.map((genre: string) => (<span>{genre}</span>))}
            </div>
            <div>
                <span>homepage</span>
                <span>{movieDetails?.homepage}</span>
            </div>
            <div>
                <span>lenguajes</span>
                {movieDetails?.languages.map((language: string) => (<span>{language}</span>))}
            </div>
        </>
        
    );
}