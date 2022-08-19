import { createReducer } from '@reduxjs/toolkit';
import { NUMBER_FILMS_TO_SHOW } from '../const';
import { films } from '../mock/films';
import { InitialState } from '../types/types';
import { changeGenreAction, loadFilms, showMoreFilms } from './actions';

export const initialState: InitialState = {
  genre: 'All genres',
  films: films,
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
    .addCase(showMoreFilms, (state) => {
      state.shownFilms = state.shownFilms + NUMBER_FILMS_TO_SHOW;
    });
});

export { reducer };
