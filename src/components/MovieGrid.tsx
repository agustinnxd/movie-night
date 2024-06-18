import { useFetchMovies } from '../hooks/useFetchMovies';
import { MovieItem } from './MovieItem';

export const Movies = () => {

  const { movies, isLoading } = useFetchMovies();
    
  return (
    <div>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      { movies.map( (movie:any) => {
        return(  
          <MovieItem 
            title={movie.title} 
            release_date={movie.date} 
            img={`https://image.tmdb.org/t/p/w154${movie.img}`}
          />
          
        ) 
      } )}
    </div>
  )
}
