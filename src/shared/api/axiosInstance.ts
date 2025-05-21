import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});
