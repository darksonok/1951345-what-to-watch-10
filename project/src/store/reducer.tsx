import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import { changeGenreAction, changeLoadingStatus, loadFilms, loadPromoFilm } from './actions';

export const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isLoading: true,
  promo: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(changeLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});

export { reducer };
