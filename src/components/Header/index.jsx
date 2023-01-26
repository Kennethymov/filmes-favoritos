/* eslint-disable require-jsdoc */
import {useFilmContext} from "../../context/hooks";
import style from "../../styles/Header.module.css";

export default function Header() {
  const {applyFilter} = useFilmContext();

  const filterYear = () => {
    applyFilter("year");
  };

  const filterName = () => {
    applyFilter("name");
  };

  const filterCountry = () => {
    applyFilter("country");
  };

  return (
    <header>
      <div className={style.header_container}>
        <h1 >FILMES FAVORITOS</h1>
        <div className={style.header_search}>Ordenar:
          <label htmlFor="year-release">
            <input
              type="radio"
              name="order"
              id="year-release"
              onChange={filterYear}
              value="year"
              defaultChecked
            />
            Ano de lançamento
          </label>
          <label htmlFor="film-name">
            <input
              type="radio"
              name="order"
              id="film-name"
              onChange={filterName}
              value="name"
            />
            Nome
          </label>
          <label htmlFor="film-country">
            <input
              type="radio"
              name="order"
              id="film-country"
              onChange={filterCountry}
              value="country"
            />
            País
          </label>
        </div>
      </div>
    </header>
  );
}
