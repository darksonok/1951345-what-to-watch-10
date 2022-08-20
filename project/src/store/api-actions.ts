import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { Film, PromoFilm } from '../types/types';
import { changeLoadingStatus, loadFilms, loadPromoFilm } from './actions';

type thunkOptions = {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
};

export const fetchFilmsAction = createAsyncThunk<void, undefined, thunkOptions>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(changeLoadingStatus(false));
    dispatch(loadFilms(data));
  }
);

export const fetchPromoFilmsAction = createAsyncThunk<void, undefined, thunkOptions>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoFilm>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  }
);
