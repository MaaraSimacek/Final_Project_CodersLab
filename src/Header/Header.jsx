import { Link } from "react-router";
import { SiThemoviedatabase } from "react-icons/si";
import "./Header.css"

export function Header() {

  return (
      <header>
        <Link className="header__logo" to="/"><SiThemoviedatabase /></Link>
        {/* <h1 className="header__logo"><SiThemoviedatabase /></h1> */}

        <nav className="header__nav">
          <Link className="header__link" to="/">Home</Link>
          <Link className="header__link" to="movies">Movies</Link>
          <Link className="header__link" to="faq">FAQ</Link>
          <Link className="header__link" to="contacts">Contacts</Link>
        </nav>
      </header>
  )
}