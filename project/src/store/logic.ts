import { DEFAULT_GENRE, NUMBER_FILMS_TO_SHOW } from '../const';
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

const showMoreFilms = (state: State) => (state.shownFilms += NUMBER_FILMS_TO_SHOW);

export {
  getActiveGenre,
  getFilteredFilms,
  filterFilmsByGenre,
  getGenres,
  showMoreFilms
};


