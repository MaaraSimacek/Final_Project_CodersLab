import { Link } from "react-router";

export function Header() {

  return (
    <>
      <h1>Header</h1>

      <h1>LOGO</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
        <Link to="faq">FAQ</Link>
        <Link to="contacts">Contacts</Link>
      </nav>

      <h1>-----</h1>
    </>
  )
}