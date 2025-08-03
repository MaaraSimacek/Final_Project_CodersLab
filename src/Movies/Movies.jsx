import { useState, useEffect } from "react"
import { FaStar, FaHeart } from "react-icons/fa";
import { Search } from "./Search"
import "./Movies.css"

export function Movies() {
  const [movieData, setMovieData] = useState(null)

  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b2cb3eac139e8e545436d02742b28241&page=1`)
    .then(response => response.json())
    .then(data => {
      setMovieData(data.results)
      console.log(data)
    }).catch(error => console.log(error) )
  }, [])

  return (
    <section className="movies__content">
      <h1>Movies</h1>

      <button>Kategorie</button>
      <button>Kategorie</button>
      <button>Kategorie</button>
      <button>Kategorie</button>
      <button>Kategorie</button>
      <button>Kategorie</button>

      <Search />

      {
        movieData === null
        ? <p>Načítám data...</p>
        : <div className="movies__all-movies">
          {
            movieData.map(oneMovie => ( 
              <div className="movies__one-movie"key={oneMovie.id}>
              <img src={`https://image.tmdb.org/t/p/w200${oneMovie.poster_path}`} alt={oneMovie.title}/>
              <h2>{oneMovie.title}</h2>
              <p>Rating: {oneMovie.vote_average.toFixed(2)} <FaStar className="favorite__star"/></p>
              <p>{oneMovie.overview}</p> 
              <FaHeart className="movies__icon"/>
            </div>
            ))
          }
        </div>
      }

     </section>
  )
}