import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const getCities = async () => {
  try {
    const res = await axiosInstance.get('cities');
    return res.data;
  } catch (err) {
    throw err;
  }
};
