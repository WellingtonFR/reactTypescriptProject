import cardStyle from "./card.module.css";

export default function Page() {
  return (
    <div className={cardStyle.card}>
      <h1 className={cardStyle.header}>Pergunta</h1>
      <p className={cardStyle.question}>A lua gira em torno do sol ?</p>
      <form className={cardStyle.form}>
        <input type="radio" value="sim" id="sim" name="question" />
        <label htmlFor="sim">Sim</label>
        <input type="radio" value="nao" id="nao" name="question" />
        <label htmlFor="nao">Não</label>
      </form>
    </div>
  );
}
