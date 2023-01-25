import { useFilmContext } from "../../../context/hooks"
import style from "../../../styles/card.module.css"


export default function Card() {
  const { films } = useFilmContext();

  return (
    films.map((film) => {
      return (
        <div key={film.id} className={style.card}>
          <img src={film.image} alt={`imagem ${film.title}`} />
          <h3>{film.title}</h3>
          <h4>{`Ano de lançamento: ${film.release_year}`}</h4>
          <h5>{`País: ${film.country}`}</h5>
        </div>
    )})
    
  )
}