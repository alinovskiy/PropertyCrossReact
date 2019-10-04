import Axios, { AxiosInstance } from 'axios';

export const nestoria: AxiosInstance = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});
