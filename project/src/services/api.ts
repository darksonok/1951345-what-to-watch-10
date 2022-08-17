import axios, { AxiosInstance } from 'axios';
import { BASE_URL, CONNECTION_TIMEOUT } from '../const';

const options: {
  baseURL: string,
  timeout: number
} = {
  baseURL: BASE_URL,
  timeout: CONNECTION_TIMEOUT
};

const createAPI = (): AxiosInstance => axios.create(options);
const api = createAPI();

export default api;

