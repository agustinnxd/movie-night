import { SearchMovies } from "./components/MoviesNavbar"
import { Movies } from "./components/MovieGrid"
import { useState } from "react"


export const MovieNightApp = () => {
  const searchState = () => {
    const [inputValue, setInputValue] = useState('')
    const handleSearchMovies = (event:React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
    }

    return{
      inputValue,
      handleSearchMovies
    }
  };

  const {inputValue, handleSearchMovies} = searchState();


  return (
    <>
      <SearchMovies inputValue={inputValue} handleSearchMovies={handleSearchMovies}/>

      <Movies inputValue={inputValue}/>
    </>
  )
}
