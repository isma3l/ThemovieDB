import { ToastContainer } from "react-toastify";
import { RateForm, DataSet, SimpleData } from "../components";
import { useMovieDetails } from "./useMovieDetails";
import 'react-toastify/dist/ReactToastify.css';

export function MovieDetailsPage() {
    const { hasError, movie, loading, loadingRating, handleRating } = useMovieDetails();
    
    if (hasError) return (<p className="flex justify-center text-red-600 text-3xl pt-12">
        Hubo un error inténtelo más tarde
    </p>);

    if (loading) return "Cargando";
    
    return (
        <>
            <div className="flex w-4/5 self-center">
                <img src={movie?.posterPath} className="md:w-80 lg:w-96 h-1/3" alt="movie poster"/>
                <div className="flex flex-col ml-16 text-white">
                    <span className="text-4xl font-bold text-orange-900">{movie?.title}</span>
                    <span className="font-medium text-lg mt-8 mb-4 text-zinc-100">{movie?.overview}</span>
                    <DataSet title="Géneros" data={movie?.genres ?? []}/>
                    <SimpleData label="Popularidad" value={movie?.popularity.toString() ?? ""}/>
                    <SimpleData label="Votacion" value={movie?.voteAverage.toString() ?? ""}/>
                    <SimpleData label="Fecha de estreno" value={movie?.releaseDate ?? ""}/>
                    <DataSet title="Lenguajes" data={movie?.languages ?? []}/>
                    <RateForm loading={loadingRating} handleRating={handleRating} />
                </div>
            </div>
            <ToastContainer />
        </>
        
        
    );
}