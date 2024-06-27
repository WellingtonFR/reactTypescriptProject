import cardStyle from "./card.module.css";

interface CardProps {
  headerTitle: string;
  children: React.ReactNode;
}

const questions = [
  {
    question: "A lua gira em torno do sol ?",
    alternatives: ["Sim", "Não", "Talvez", "Socorro"],
  },
];

export function Card(props: CardProps) {
  const currentQuestion = 0;
  const questionNumber = currentQuestion + 1;
  const question = questions[currentQuestion];

  return (
    <div className={cardStyle.card}>
      <div
        className={cardStyle.header}
      >{`Questão número ${questionNumber} de ${questions.length}`}</div>

      <p className={cardStyle.question}>{question.question}</p>

      <form className={cardStyle.form}>
        {question.alternatives.map((alternative, index) => (
          <div className={cardStyle.answer} key={alternative + index}>
            <input
              type="radio"
              value={`alternative_${index}`}
              id={`alternative_${index}`}
              name="alternative"
            />
            <label htmlFor={`alternative_${index}`}>{alternative}</label>
          </div>
        ))}

        <div>{props.children}</div>
      </form>
    </div>
  );
}
