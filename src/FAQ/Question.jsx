import { useState } from "react"
import { LuMessageCircleQuestion } from "react-icons/lu";
import "./Question.css"

export function Question({question, answer}) {
  const [show, setShow] = useState(false)

  return (
    <div className="question__one-question">
      <section>
        <h2>{question}</h2>
        <button 
          onClick={() => {setShow(!show)}} >
          <LuMessageCircleQuestion className="question__icon"/>
        </button>
      </section>

      {show && <p>{answer}</p>}
    </div>
  )
}