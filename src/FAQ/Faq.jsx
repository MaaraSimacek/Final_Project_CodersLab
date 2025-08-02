import questions from "./data"
import { Question } from "./Question"
import "./Faq.css"

export function Faq() {

  return (
    <div className="faq"> 
      <div className>
        <h1 className="faq__title">FAQ</h1>
        {questions.map((oneQuestion) => {
          return <Question key={oneQuestion.id} {...oneQuestion}/>
        })}
      </div>
    </div>
  )
}