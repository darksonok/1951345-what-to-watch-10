import { DEFAULT_GENRE } from '../const';
import { State } from '../types/state';
import { Film } from '../types/types';
import { getFilmGenres } from '../utils';

const getActiveGenre = (state: State) => state.genre;
const getFilteredFilms = (state: State) => state.films;

const filterFilmsByGenre = (state: State) =>
  state.genre !== DEFAULT_GENRE
    ? state.films.filter((film: Film) => film.genre === state.genre)
    : state.films;

const getGenres = (state: State) => getFilmGenres(state.films);

export {
  getActiveGenre,
  getFilteredFilms,
  filterFilmsByGenre,
  getGenres,
};


