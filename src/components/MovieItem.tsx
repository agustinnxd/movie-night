import { MovieItems } from "../interfaces/MovieItem.interface"

export const MovieItem = ({title, release_date, img}:MovieItems) => {

  return (
    <div className="card-grid">
        <img src={img} alt={title} />
        <h4>{title}</h4>
        <p>{release_date}</p>
    </div>
  )
}
