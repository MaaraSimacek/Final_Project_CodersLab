import { useEffect, useState } from "react"
import "./Search.css"
import { FaStar, FaHeart } from "react-icons/fa"

export function Search({ movies, toggleFavorite, favorites }) {
  const [searchingText, setSearchingText] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect( () => {
    if (!movies) return;
    const moviesToFilter = movies.filter((oneMovie) => {
      return oneMovie.title.toLowerCase().includes(searchingText.toLowerCase())
    })
    setFilteredMovies(moviesToFilter)
  }, [searchingText, movies])
    

  return (
    <div>
      <form>
        <input type="text" placeholder="Search movie" className="seach__input" onChange={(e) => {setSearchingText(e.target.value)}}/>
      </form>

      {
        filteredMovies.length === 0
        ? null
        : <div className="movies__all-movies">
          
          {
            filteredMovies.map(oneMovie => ( 
              <div className="movies__one-movie" key={oneMovie.id}>
                <img src={`https://image.tmdb.org/t/p/w200${oneMovie.poster_path}`} alt={oneMovie.title}/>
                <h2>{oneMovie.title}</h2>
                <div className="movies__line">
                  <p>Rating: {oneMovie.vote_average.toFixed(2)} <FaStar className="favorite__star"/></p>
                  <FaHeart
                    className="movies__icon"
                    style={{ color: favorites.includes(oneMovie.id) ? "#e53935" : undefined }}
                    onClick={() => toggleFavorite(oneMovie.id)}
                  />
                </div>
                <p>{oneMovie.overview}</p> 
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}