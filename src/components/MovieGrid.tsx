import { useFetchMovies } from '../hooks/useFetchMovies';
import { MovieItem } from './MovieItem';
import '../Styles/MovieGrid.css'
import { MovieItems } from '../interfaces/MovieItem.interface';

export const Movies = ({inputValue}:{inputValue:string}) => {

  const { movies, isLoading } = useFetchMovies();

    
  return (
    <div className='cards-grid'>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      { movies.filter( (movie:any) => {
        return(
          inputValue.toLowerCase() === '' 
          ? movie
          : movie.title.toLowerCase().includes(inputValue))
      } ).map((movie:MovieItems) => (
        <MovieItem 
            title={movie.title} 
            release_date={movie.date} 
            img={`https://image.tmdb.org/t/p/w500${movie.img}`}
            rating={movie.rating}
            key={movie.id}
          />
      ))}
    </div>
  )
}
