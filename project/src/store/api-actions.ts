import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { store } from '.';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { AuthorizationData, Film, PromoFilm, UserData } from '../types/types';
import { changeAuthorizationStatus, changeLoadingStatus, loadFilms, loadPromoFilm, saveUserData, setError } from './actions';

type thunkOptions = {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
};

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

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

export const checkAuthAction = createAsyncThunk<void, undefined, thunkOptions>(
  'user/authorization',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Authorization)
      .then(
        ({data}) => {
          dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
          dispatch(saveUserData(data));
        },
        () => {
          dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
        }
      );
  }
);

export const loginAction = createAsyncThunk<void, AuthorizationData, thunkOptions>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    await api.post<UserData>(APIRoute.Authorization, {email, password})
      .then(({data}) => {
        dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
        dispatch(saveUserData(data));
        saveToken(data.token);
      });
  }
);

export const logoutAction = createAsyncThunk<void, undefined, thunkOptions>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

