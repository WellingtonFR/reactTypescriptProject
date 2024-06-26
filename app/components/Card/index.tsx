import cardStyle from "./card.module.css";

interface CardProps {
  headerTitle: string;
  children: React.ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.header}>{props.headerTitle}</div>

      <p className={cardStyle.question}>A lua gira em torno do sol ?</p>

      <form className={cardStyle.form}>
        <div className={cardStyle.answer}>
          <input type="radio" value="sim" id="sim" name="question" />
          <label htmlFor="sim">Sim</label>
        </div>

        <div className={cardStyle.answer}>
          <input type="radio" value="nao" id="nao" name="question" />
          <label htmlFor="nao">Não</label>
        </div>

        <div>{props.children}</div>
      </form>
    </div>
  );
}
