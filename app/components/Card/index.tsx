"use client";

import cardStyle from "./card.module.css";

interface Question {
  question: string;
  alternatives: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "A lua gira em torno do sol ?",
    alternatives: ["Sim", "Não"],
    answer: "1",
  },
  {
    question: "A terra é o maior planeta do sistema solar ?",
    alternatives: ["Sim", "Não"],
    answer: "1",
  },
];

function submitForm(event: React.FormEvent<HTMLFormElement>): void {
  event.preventDefault();

  const questionInfo = event.target as HTMLFormElement;
  const formData = new FormData(questionInfo);
  const { alternative } = Object.fromEntries(formData.entries());

  const currentQuestion = 0;
  const question = questions[currentQuestion];

  const isCorrectAnswer = alternative === question.answer;
  console.log(isCorrectAnswer);
}

export function Card() {
  const currentQuestion = 0;
  const questionNumber = currentQuestion + 1;
  const question = questions[currentQuestion];

  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.header}>{`Questão número ${questionNumber} de ${questions.length}`}</div>

      <form className={cardStyle.form} onSubmit={submitForm}>
        <p className={cardStyle.question}>{question.question}</p>

        {question.alternatives.map((alternative, index) => (
          <div className={cardStyle.answer} key={alternative + index}>
            <input type="radio" value={index} id={`alternative_${index}`} name="alternative" />

            <label htmlFor={`alternative_${index}`}>{alternative}</label>
          </div>
        ))}

        <button type="submit" className={cardStyle.button}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
