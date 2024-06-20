import { useFetchMovies } from '../hooks/useFetchMovies';
import { MovieItem } from './MovieItem';
import '../Styles/MovieGrid.css'
import { MovieItems } from '../interfaces/MovieItem.interface';
import { CardSkeleton } from './CardSkeleton';
import { ratingCalc } from '../helpers/ratingCalc';
import { Skeleton } from '@mui/material';

export const Movies = ({ inputValue }: { inputValue: string }) => {

  const { movies, isLoading } = useFetchMovies();

  return (
    <>
      {
        isLoading ? (
          <div className='cards-grid'>
            {
              Array.from(new Array(18)).map(() => (
                <div className='skeleton-card'>
                  <Skeleton variant='rectangular' width={284} height={450} sx={{ bgcolor: '#5e5f69' }}/>
                  <Skeleton variant='text' sx={{ bgcolor: '#5e5f69' }} width={284}/>
                  <Skeleton variant='text' sx={{ bgcolor: '#5e5f69' }} width={142}/>
                </div>
              )
            )
          }
          </div>
        
          
        ) : (
          <div className='cards-grid'>
            {movies.filter((movie: any) => {
              return (
                inputValue.toLowerCase() === ''
                  ? movie
                  : movie.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
            }).map((movie: MovieItems) => (
              <MovieItem
                title={movie.title}
                release_date={movie.date}
                img={`https://image.tmdb.org/t/p/w500${movie.img}`}
                rating={ratingCalc(movie.rating)}
                key={movie.id}
              />
            ))}
          </div>
        )
      }
    </>
    // <div className='cards-grid'>


    //   { movies.filter( (movie:any) => {
    //     return(
    //       inputValue.toLowerCase() === '' 
    //       ? movie
    //       : movie.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
    //   } ).map((movie:MovieItems) => (
    //     <MovieItem 
    //         title={movie.title} 
    //         release_date={movie.date} 
    //         img={`https://image.tmdb.org/t/p/w500${movie.img}`}
    //         rating={ratingCalc(movie.rating)}
    //         key={movie.id}
    //       />
    //   ))}
    // </div>
  )
}
