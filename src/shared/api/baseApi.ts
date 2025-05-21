import { axiosInstance } from './axiosInstance';

export const baseApi = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
