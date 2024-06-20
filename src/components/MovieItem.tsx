import { MovieItems } from "../interfaces/MovieItem.interface"
import '../Styles/MovieItem.css'
import { Rating } from "@mui/material"
import { AiOutlinePlus } from "react-icons/ai";

export const MovieItem = ({title, release_date, img, rating}:MovieItems) => {
    
  return (
    <div className="card" >
        <img 
            src={img} 
            alt={title} 
            className="card-img-top"
        />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{release_date}</p>
            <Rating className="movie-rate" name="half-rating-read" defaultValue={ rating } readOnly/> 
            <button className="btn btn-primary"> <AiOutlinePlus/> </button>
        </div>
        
    </div>
  )
}
