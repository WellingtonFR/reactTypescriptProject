"use client";

import React, { useState } from "react";
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

export function Card() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionNumber = currentQuestion + 1;
  const question = questions[currentQuestion];

  const radioButtons = document.querySelectorAll('.alternative-radio');
    radioButtons.forEach((radioButton) => {
      (radioButton as HTMLInputElement).checked = false;
    });

  function submitForm(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const questionInfo = event.target as HTMLFormElement;
    const formData = new FormData(questionInfo);
    const { alternative } = Object.fromEntries(formData.entries());

    const question = questions[currentQuestion];

    const isCorrectAnswer = alternative === question.answer;
    const isLastQuestion = questionNumber === questions.length;

    if (isLastQuestion) {
      alert("Desafio concluído, aguardo o resultado");
      return;
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.header}>{`Questão número ${questionNumber} de ${questions.length}`}</div>

      <form className={cardStyle.form} onSubmit={submitForm}>
        <p className={cardStyle.question}>{question.question}</p>

        {question.alternatives.map((alternative, index) => (
          <div className={cardStyle.answer} key={alternative + index}>
            <input type="radio" value={index} id={`alternative_${index}`} name="alternative" className="alternative-radio" />
            <label htmlFor={`alternative_${index}`} className="alternative-label">
              {alternative}
            </label>
          </div>
        ))}

        <button type="submit" className={cardStyle.button}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
