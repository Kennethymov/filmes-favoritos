import { useFilmContext } from "../../context/hooks";
import style from "../../styles/Header.module.css"

export default function Header() {
  const { setFilter } = useFilmContext();

  const filterYear = () => {
    setFilter("year");
  };

  const filterName = () => {
    setFilter("name");
  };

  const filterCountry = () => {
    setFilter("country");
  };

  return(
    <header>
      <div className={style.header_container}>
        <h1 >FILMES FAVORITOS</h1>
        <div className={style.header_search}>Ordenar: 
          <label htmlFor="year-release">
            <input type="radio" name="order" id="year-release" onClick={filterYear} defaultChecked/>
            Ano de lançamento
          </label>
          <label htmlFor="film-name">
            <input type="radio" name="order" id="film-name" onClick={filterName}/>
            Nome
          </label>
          <label htmlFor="film-country">
            <input type="radio" name="order" id="film-country" onClick={filterCountry}/>
            País
          </label>
        </div>
      </div>
    </header>
  )
}