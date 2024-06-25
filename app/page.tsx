import cardStyle from "./card.module.css";

export default function Page() {
  return (
    <div className={cardStyle.card}>

      <div className={cardStyle.header}>Pergunta 1 de 10</div>

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

      </form>
      
    </div>
  );
}
