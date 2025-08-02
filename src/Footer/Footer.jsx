import { Link } from "react-router";
import { SiThemoviedatabase } from "react-icons/si";
import "./Footer.css"

export function Footer() {

  return (
    <footer>
        <div className="footer__container">
          <Link className="footer__logo" to="/"><SiThemoviedatabase /></Link>

          <nav className="footer__nav">
            <Link className="footer__link" to="/">Home</Link>
            <Link className="footer__link" to="movies">Movies</Link>
            <Link className="footer__link" to="faq">FAQ</Link>
            <Link className="footer__link" to="contacts">Contacts</Link>
          </nav>
      </div>

      <p className="footer__copy">&copy; 2025 TheMovieDB</p>
    </footer>
  )
}