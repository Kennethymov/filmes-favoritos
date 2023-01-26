import {useContext} from "react";
import {FilmContext} from "./Film";

export const useFilmContext = () => useContext(FilmContext);
