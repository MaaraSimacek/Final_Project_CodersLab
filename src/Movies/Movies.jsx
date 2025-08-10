import { useState, useEffect } from "react"
import { FaStar, FaHeart } from "react-icons/fa";
import { Search } from "./Search"
import genres from "./genres"
import "./Movies.css"

export function Movies() {
  const [movieData, setMovieData] = useState([])
  const [selectedGenreId, setSelectedGenreId] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b2cb3eac139e8e545436d02742b28241&page=1`)
      .then(response => response.json())
      .then(data => setMovieData(data.results))
      .catch(error => console.log(error))
  }, [])

  // Filtrování filmů podle žánru
  const filteredMovies = selectedGenreId
    ? movieData.filter(movie => movie.genre_ids.includes(selectedGenreId))
    : movieData

  return (
    <section className="movies__content">

      <h1>Movies</h1>

      {genres.map(genre => (
        <button
          key={genre.id}
          onClick={() => setSelectedGenreId(genre.id)}
          className={`${selectedGenreId === genre.id ? "active" : ""} movies__genre-button`} 
        >
          {genre.name}
        </button>
      ))}
      <button className="movies__genre-button" onClick={() => setSelectedGenreId(null)}>All Movies</button>

      <Search movies={filteredMovies} />

    </section>
  )
}