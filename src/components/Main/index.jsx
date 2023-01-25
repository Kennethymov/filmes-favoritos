import Card from "./Card";
import style from "../../styles/card.module.css"

export default function Main() {
  return(
    <main className={style.card_container}>
      <Card />
    </main>
  )
}