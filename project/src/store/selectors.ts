import { createSelector } from 'reselect';
import { DEFAULT_GENRE } from '../const';
import { State } from '../types/state';
import { Film } from '../types/types';
import { getFilmGenres } from '../utils';

const getActiveGenre = (state: State) => state.genre;
const getFilteredFilms = (state: State) => state.filteredFilms;
const getFilms = (state: State) => state.films;
const getPromoFilm = (state: State) => state.promo;
const getNumberOfShownFilms = (state: State) => state.shownFilms;
const getAuthorizationStatus = (state: State) => state.authorizationStatus;
const getUserInfo = (state: State) => state.user;
const getFavoriteFilms = (state: State) => state.favoriteFilms;
const getGenres = (state: State) => getFilmGenres(state.films);
const getLoadingStatus = (state: State) => (state.isLoading);

export const filterFilmsByGenre = createSelector(
  [getActiveGenre, getFilms],
  (activeGenre, films) => (
    activeGenre !== DEFAULT_GENRE
      ? films.filter((film: Film) => film.genre === activeGenre)
      : films)
);

export {
  getActiveGenre,
  getFilteredFilms,
  getGenres,
  getFilms,
  getPromoFilm,
  getNumberOfShownFilms,
  getAuthorizationStatus,
  getUserInfo,
  getFavoriteFilms,
  getLoadingStatus,
};


