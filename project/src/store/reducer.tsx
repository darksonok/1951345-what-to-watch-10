import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import { changeGenreAction, changeLoadingStatus, loadFilms, loadPromoFilm, showMoreFilms } from './actions';
import { NUMBER_FILMS_TO_SHOW } from '../const';

export const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isLoading: true,
  promo: null,
  shownFilms: NUMBER_FILMS_TO_SHOW,
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
    });
});

export { reducer };
