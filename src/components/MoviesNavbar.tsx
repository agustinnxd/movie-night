import '../Styles/MoviesNavbar.css'
import { getMovies } from '../helpers/getMovies';
import {MoviesNavbar} from '../interfaces/MoviesNavbar.interface'

export const SearchMovies = ( {inputValue, handleSearchMovies}:MoviesNavbar ) => {

  const {setScreenContent} = getMovies();
    
  return (
    <>
        <nav>
          <div className="navbar-container">
            <a href="#" className="navbar-brand mb-0 h1">Movie Night</a>
            <form action="">
              <input 
                type="text" 
                placeholder="Buscar" 
                className="navbar-input"
                value={ inputValue }
                onChange={ handleSearchMovies }
              />
            </form>
            <div>
              <ul className="navbar-list">
                <li className="navbar-item"><a href="#" className="navbar-brand" onClick={() => {setScreenContent('tv')}}>Shows</a></li>
                <li className="navbar-item"><a href="#" className="navbar-brand" onClick={() => {setScreenContent('movie')}}>Movies</a></li>               
                <li className="navbar-item"><a href="#" className="navbar-brand">Home</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
    </>
  )
}
