import { useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";

export const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getMovieInfo = async() => {
        const newMovies = await getMovies();
        setMovies( newMovies );
        setIsLoading( false );
    };

    useEffect(() => {
        getMovieInfo();
    }, []);

    return {
        movies,
        isLoading
    }
}
