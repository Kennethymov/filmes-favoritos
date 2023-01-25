import { createContext, useEffect, useMemo, useState } from "react";
import { filmsMock } from "../MockFilms/films.mock";
import { filterCountry, filterName, filterYear } from "../utils/filter";

const FilmContext = createContext({});

const FilmProvider = ({ children }) => {


  const [films, setFilms] = useState([]);
  const [filter, setFilter] = useState("year");

  useEffect(() => {
    setFilms(filmsMock);
  }, [])

  useEffect(() => {
    if (filter === 'year') {
      setFilms(filterYear(filmsMock));
      console.log("alterado ano");
    }
    if (filter === 'name') {
      setFilms(filterName(filmsMock));
      console.log("alterado nome");

    }
    if (filter === 'country') {
      setFilms(filterCountry(filmsMock));
      console.log("alterado país");

    }
  }, [filter])

  const getFilmContextValues = useMemo(() => ({films, filter, setFilms, setFilter}), [films, filter]);

  return (
    <FilmContext.Provider value={ getFilmContextValues } >
      { children }
    </FilmContext.Provider>
  )
};

export { FilmContext, FilmProvider };
