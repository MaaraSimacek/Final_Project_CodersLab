import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import top from "./Data/dataTop"
import "./Top.css"

export function Top() {
  const [index, setIndex] = useState(0)

  // Filmy se točí stále dokola
  useEffect( () => {
    if (index < 0) {
      setIndex(top.length - 1)
    } else if (index > top.length - 1) {
      setIndex(0)
    }
  }, [index])

  // Automatické posouvání
  useEffect( () => {
    let setIntervalId = setInterval( () => {
      setIndex(index + 1)
    }, 5000)
    return () => clearInterval(setIntervalId)
  }, [index])

  return (
    <section className="top__all-movies">

        <div className="top__all-movies-content">
          {top.map( (oneMovie, oneMovieIndex) => {
            const {id, poster_path, title, overview, vote_average, rank} = oneMovie

            let mainClass = "next-slide"

            if (oneMovieIndex === index) {
              mainClass = "active-slide"
            }

            if (oneMovieIndex === index - 1 || (index === 0 && oneMovieIndex === top.length - 1)) {
              mainClass = "last-slide"
            }

            return <article key={id} className={mainClass}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
                <h2>{rank}. {title}</h2>
                <p>Rating: {vote_average.toFixed(2)} <FaStar className="favorite__star"/></p>
                <p>{overview}</p>
              </article>
          })}         
        </div>

       <button onClick={ () => {setIndex(index - 1)} }>
          <FaArrowAltCircleLeft />
       </button>

       <button onClick={ () => {setIndex(index + 1)} }>
          <FaArrowAltCircleRight />
       </button>
    </section>
  )
}