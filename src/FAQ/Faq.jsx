import questions from "./data"
import { Question } from "./Question"
import "./Faq.css"

export function Faq() {

  return (
    <div className="faq"> 
      <div>
        <h1>FAQ</h1>
        {questions.map((oneQuestion) => {
          return <Question key={oneQuestion.id} {...oneQuestion}/>
        })}
      </div>
    </div>
  )
} 