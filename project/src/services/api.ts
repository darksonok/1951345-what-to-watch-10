import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL, CONNECTION_TIMEOUT } from '../const';

const options: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: CONNECTION_TIMEOUT
};

const createAPI = (): AxiosInstance => axios.create(options);
const api = createAPI();

export default api;

