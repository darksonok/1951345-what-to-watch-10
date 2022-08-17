import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/types';

export const changeGenreAction = createAction('films/changeGenre', (genre) => ({
  payload: genre
}));

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const changeLoadingStatus = createAction('data/loadingStatus', (isLoading) => ({
  payload: isLoading
}));
