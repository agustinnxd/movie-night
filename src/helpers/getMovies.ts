import { MovieItems } from "../interfaces/MovieItem.interface"

function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getMovies = async () => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDk3NTJkNzUxYzljNGEwOGZlMzFhMjQxNzE3YjYxNyIsInN1YiI6IjY2NmY5YjAzNDA5YzNhMjk0ZGVjMDk1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3F1zXjr1i5bkL14b7ME9U293N8Umh0FWi7EvHIyhDoI'
        }
    };
         
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    const resp = await fetch(url, options)
    const {results} = await resp.json()

    

    const movies = results.map((movie:MovieItems) => ({
        img: movie.poster_path,
        title: movie.title,
        date: movie.release_date,
        rating: movie.vote_average,
        id: movie.id
    }))
    
    await sleep(4000);

    return movies
    
    
};
