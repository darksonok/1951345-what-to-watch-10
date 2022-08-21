import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL, CONNECTION_TIMEOUT } from '../const';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from './process-error-handle';

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

