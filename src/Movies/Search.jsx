import { useState } from "react"
import "./Search.css"

export function Search() {
  const [searchingText, setSearchingText] = useState("")
  return (
    <div>
      <form>
        <input type="text" placeholder="Search movie" onChange={ (e) => {setSearchingText(e.target.value)} }/>
      </form>
    </div>
  )
}