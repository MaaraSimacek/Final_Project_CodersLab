import { Top } from "./Top"
import { Favorite } from "./Favorite"

import "./Home.css"


export function Home() {

  return (
    <>
      <h1>TOP 10</h1>
      {/* <Top /> */}

      <h1>Favorites</h1>
      <Favorite />
    </>
  )
}