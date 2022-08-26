import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { APIRoute, AppRoute, BASE_URL, CONNECTION_TIMEOUT, FavoriteStatus } from '../const';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from './process-error-handle';
import { Film, Review } from '../types/types';
import { NavigateFunction } from 'react-router-dom';
import { store } from '../store';
import { fetchFavoriteFilmsAction } from '../store/api-actions';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const options: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: CONNECTION_TIMEOUT
};

const createAPI = (): AxiosInstance => axios.create(options);
const api = createAPI();

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();

    if(token) {
      config.headers['X-Token'] = token;
    }

    return config;
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.message && shouldDisplayError(error.response)){
      processErrorHandle(error.response.data.error);
    }
    throw error;
  }
);

export default api;

export const fetchReviews = async (
  id:number,
  callbackForSetLoadingStatus:React.Dispatch<React.SetStateAction<boolean>>,
  callbackForSetData: React.Dispatch<React.SetStateAction<Review[]>>
) => {
  await api.get<Review[]>(`${APIRoute.Reviews}/${id}`)
    .then( ({data}) => {
      callbackForSetLoadingStatus(false);
      callbackForSetData(data);
    });
};

export const fetchChosenFilm = async (
  id: number,
  callbackForSetFilmLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>,
  callbackForSetOpenedFilm: React.Dispatch<React.SetStateAction<Film>>,
  callbackForRedirect: NavigateFunction
) => {
  await api.get<Film>(`${APIRoute.Films}/${id}`)
    .then( ({data}) => {
      callbackForSetFilmLoadingStatus(false);
      callbackForSetOpenedFilm(data);
    },
    (error) => {
      if (error.response.status === StatusCodes.NOT_FOUND) {
        callbackForRedirect(AppRoute.NotFound);
      }
    }
    );
};

export const fetchSimilarFilms = async (
  id: number,
  callbackForSetSimilarFilmsLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>,
  callbackForSetSimilarFilms: React.Dispatch<React.SetStateAction<Film[]>>
) => {
  await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`)
    .then( ({data}) => {
      callbackForSetSimilarFilmsLoadingStatus(false);
      callbackForSetSimilarFilms(data);
    });
};

export const addToFavorites = async (
  id: number,
  status: number,
  callBackForSetFavoriteStatus: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  await api.post(`${APIRoute.Favorite}/${id}/${status}`)
    .then( () => {
      store.dispatch(fetchFavoriteFilmsAction());
      status === FavoriteStatus.INLIST
        ? callBackForSetFavoriteStatus(true)
        : callBackForSetFavoriteStatus(false);
    });
};
