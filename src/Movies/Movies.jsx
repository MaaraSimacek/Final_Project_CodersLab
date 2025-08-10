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

      <Search movies={movieData}/>

    </section>
  )
}