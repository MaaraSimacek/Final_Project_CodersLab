import { FaPhone, FaAt } from "react-icons/fa6";
import "./Contacts.css"

export function Contacts() {

  return (
    <>
      <h1>Contacts</h1>
      <div className="contacts__content">
        <h2>The Movie Db</h2>
        <h3>Příčná 258/12</h3>
        <h3>Bradavice</h3>
        <h3>123 56</h3>
        <h3><FaPhone className="contacts__icon" />+ 420 458 265 731</h3>
        <h3><FaAt className="contacts__icon" />TMDB@TMDB.com</h3>
      </div>
    </>
  )
}