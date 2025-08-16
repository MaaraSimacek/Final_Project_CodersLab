import { useState, useEffect } from "react"
import { FaStar, FaHeart } from "react-icons/fa";
import { Search } from "./Search"
import genres from "./genres"
import "./Movies.css"

export function Movies() {
  const [movieData, setMovieData] = useState([])
  const [selectedGenreId, setSelectedGenreId] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [showFavorites, setShowFavorites] = useState(false)

  const API_KEY = "b2cb3eac139e8e545436d02742b28241"
  const TOTAL_PAGES = 5;

  // Načítání filmů z API
  useEffect(() => {
  const fetchAllPages = async () => {
    let allResults = [];
    for (let page = 1; page <= TOTAL_PAGES; page++) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
        );
        const data = await response.json();
        allResults = allResults.concat(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    setMovieData(allResults);
  };
  fetchAllPages();
}, [API_KEY, TOTAL_PAGES]);

  // Filtrování filmů podle žánru
  let filteredMovies = movieData
  if (showFavorites) {
    filteredMovies = movieData.filter(movie => favorites.includes(movie.id))
  } else if (selectedGenreId) {
    filteredMovies = movieData.filter(movie => movie.genre_ids.includes(selectedGenreId))
  }

  // Přepínání oblíbených filmů
  const toggleFavorite = (movieId) => {
    setFavorites(favs =>
      favs.includes(movieId)
        ? favs.filter(id => id !== movieId)
        : [...favs, movieId]
    )
  }

  return (
    <section className="movies__content">

      <h1>Movies</h1>
      
      {genres.map(genre => (
        <button
          key={genre.id}
          onClick={() => {
            setSelectedGenreId(genre.id)
            setShowFavorites(false)
          }}
          className={`${selectedGenreId === genre.id && !showFavorites ? "active" : ""} movies__genre-button`} 
        >
          {genre.name}
        </button>
      ))}

      <button
        className={`movies__genre-button${showFavorites ? " active" : ""}`}
        onClick={() => {
          setShowFavorites(true)
          setSelectedGenreId(null)
        }}
      >
        Favorites
      </button>
      
      <button
        className={`movies__genre-button${selectedGenreId === null && !showFavorites ? " active" : ""}`}
        onClick={() => {
          setSelectedGenreId(null)
          setShowFavorites(false)
        }}
      >
        All Movies
      </button>

      <Search
        movies={filteredMovies}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />

    </section>
  )
}