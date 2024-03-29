import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';
import { Film, PromoFilm } from '../types/types';

export const changeGenreAction = createAction('films/changeGenre', (genre) => ({
  payload: genre
}));

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const changeLoadingStatus = createAction('data/loadingStatus', (isLoading) => ({
  payload: isLoading
}));

export const loadPromoFilm = createAction<PromoFilm>('data/loadPromoFilm');

export const showMoreFilms = createAction('/films/showMore', (numberOfShownFilms) => ({
  payload: numberOfShownFilms
}));

export const changeAuthorizationStatus = createAction('user/authorization', (authorizationStatus) => ({
  payload: authorizationStatus
}));

export const saveUserData = createAction('user/saveUserData', (userData) => ({
  payload: userData
}));

export const setError = createAction<string | null>('app/setError');

export const setErrorCode = createAction<number | null>('app/setErrorCode');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const loadFavoriteFilms = createAction<Film[]>('data/loadFavoriteFilms');
