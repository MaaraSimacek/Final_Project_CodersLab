import { FaPhone, FaAt } from "react-icons/fa6";
import "./Contacts.css"

export function Contacts() {

  return (
    <>
      <h1>Contacts</h1>
      <div className="contacts__content">
        <h2>The Movie Db</h2>
        <h3>14 Diagon Alley</h3>
        <h3>London</h3>
        <h3>EC3V 1LT</h3>
        <h3><FaPhone className="contacts__icon" />+ 420 458 265 731</h3>
        <h3><FaAt className="contacts__icon" />TMDB@TMDB.com</h3>
      </div>
    </>
  )
}