import { FaStar } from "react-icons/fa";
import favorite from "./Data/dataFavorite"
import "./Favorite.css"

export function Favorite() {

  return (
    <section className="favorite__all-movies">
      {
        favorite.map( (oneFavorite) => {
          const {id, poster_path, title, overview, vote_average} = oneFavorite

          return (
            <div className="favorite__one-movie" key={id}>
              <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
              <h2>{title}</h2>
              <p>Rating: {vote_average.toFixed(2)} <FaStar className="favorite__star"/></p>
              <p>{overview}</p>
            </div>
          )
        })
      }    
    </section>
  )
}