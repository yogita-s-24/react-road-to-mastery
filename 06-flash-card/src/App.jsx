import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 9100,
    question: "How to give component memory?",
    answer: "useState Hook",
  },
  {
    id: 9200,
    question:
      "What do we call an input element that is completely synchronized with states?",
    answer: "Controlled Element",
  },
  {
    id: 9300,
    question: "What language is React based on?",
    answer: "Javascript",
  },
  {
    id: 9400,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9600,
    question: "What are the building blocks of react app?",
    answer: "Components",
  },
  {
    id: 9700,
    question: "What the name of syntax we use to describe a UI in React?",
    answer: "Jsx",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div key={question.id} className="flashcard">
          <p
            className="question"
            onClick={() =>
              setSelectedId(selectedId === question.id ? null : question.id)
            }>
            {question.question}
          </p>
          {selectedId === question.id && (
            <p className="answer">{question.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
