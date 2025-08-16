import { Top } from "./Top"
import { Favorite } from "./Favorite"
import "./Home.css"

export function Home() {

  return (
    <>
    <h1>TOP 10</h1>

    <div className="slider"> 
      <Top />
    </div>

    <h1>Our Selection</h1>
    <Favorite />
    </>
  )
}