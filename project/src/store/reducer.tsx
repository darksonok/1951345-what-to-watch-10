import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import {
  changeAuthorizationStatus,
  changeGenreAction,
  changeLoadingStatus,
  loadFavoriteFilms,
  loadFilms,
  loadPromoFilm,
  saveUserData,
  setError,
  setErrorCode,
  showMoreFilms
} from './actions';
import {
  AuthorizationStatus,
  NUMBER_FILMS_TO_SHOW
} from '../const';

export const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  filteredFilms: [],
  isLoading: true,
  promo: null,
  shownFilms: NUMBER_FILMS_TO_SHOW,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
  errorCode: null,
  favoriteFilms: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
      state.shownFilms = NUMBER_FILMS_TO_SHOW;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(changeLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(showMoreFilms, (state) => {
      state.shownFilms = state.shownFilms + NUMBER_FILMS_TO_SHOW;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setErrorCode, (state, action) => {
      state.errorCode = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});

export { reducer };
