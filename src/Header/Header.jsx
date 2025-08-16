import { Link, NavLink } from "react-router";
import { SiThemoviedatabase } from "react-icons/si";
import "./Header.css"

export function Header() {
  return (
    <header>
      
      <Link className="header__logo" to="/">
        <SiThemoviedatabase />
      </Link>

      <nav className="header__nav">

        <NavLink
          to="/"
          className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
        >
          Movies
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
        >
          FAQ
        </NavLink>

        <NavLink
          to="/contacts"
          className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
        >
          Contacts
        </NavLink>

      </nav>

    </header>
  );
}