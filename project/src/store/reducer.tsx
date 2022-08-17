import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import { changeGenreAction, changeLoadingStatus, loadFilms } from './actions';

export const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isLoading: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    });
});

export { reducer };
