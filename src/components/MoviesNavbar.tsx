import { useState } from "react"
import './MoviesNavbar.css'

export const SearchMovies = () => {
    
    const [inputValue, setInputValue] = useState('')

    const handleSearchMovies = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

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
                <li className="navbar-item"><a href="#" className="navbar-brand">Shows</a></li>
                <li className="navbar-item"><a href="#" className="navbar-brand">Movies</a></li>               
                <li className="navbar-item"><a href="#" className="navbar-brand">Home</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
    </>
  )
}
