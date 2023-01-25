import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { filmsMock } from "../mockFilms/films.mock";

const FilmContext = createContext({});

const FilmProvider = ({ children }) => {


  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(filmsMock);
  }, [])

  const applyFilter = useCallback((filter) => {
    const nl = Array.from(films);
    switch (filter) {
      case "year":
        nl.sort((a, b) => a.release_year - b.release_year)
        setFilms(nl);
        break;
      case "name":
        nl.sort((a, b) => a.title.localeCompare(b.title))
        setFilms(nl);
        break;
      case "country":
        nl.sort((a, b) => a.country.localeCompare(b.country))
        setFilms(nl);
        break;
      default:
        break;
    }
  }, [films])

  const getFilmContextValues = useMemo(() => ({films, setFilms, applyFilter}), [films, applyFilter]);

  return (
    <FilmContext.Provider value={ getFilmContextValues } >
      { children }
    </FilmContext.Provider>
  )
};

export { FilmContext, FilmProvider };
