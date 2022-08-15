import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mock/films';
import { InitialState } from '../types/types';
import { changeGenreAction, loadFilms } from './actions';

export const initialState: InitialState = {
  genre: 'All genres',
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
