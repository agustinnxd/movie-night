import { MovieItems } from "../interfaces/MovieItem.interface"
import '../Styles/MovieItem.css'



export const MovieItem = ({title, release_date, img, rating}:MovieItems) => {

    const rate = Math.floor(rating*10)/10

  return (
    <div className="card" >
        <img 
            src={img} 
            alt={title} 
            className="card-img-top"
        />
        <div className="card-body">
            <h4 className="card-title">{title} <button className="btn btn-primary">+</button></h4>
            <p className="card-text">{release_date}</p>
            <div className="movie-rate-container">
                <p className="movie-rate">{rate}</p>
            </div>
        </div>
        
    </div>
  )
}
