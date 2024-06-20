import { ShowItem } from "../interfaces/ShowItem.interface";


export const getShows = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDk3NTJkNzUxYzljNGEwOGZlMzFhMjQxNzE3YjYxNyIsInN1YiI6IjY2NmY5YjAzNDA5YzNhMjk0ZGVjMDk1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3F1zXjr1i5bkL14b7ME9U293N8Umh0FWi7EvHIyhDoI'
        }
    };
    
    const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
    const resp = await fetch(url, options);
    const { results } = await resp.json();

    const shows = results.map( (show:ShowItem) => ({
        img: show.poster_path,
        title: show.name,
        date: show.first_air_date,
        rating: show.vote_average,
        id: show.id
    }) )

    return shows
}


