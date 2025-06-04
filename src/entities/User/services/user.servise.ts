import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const getUser = async () => {
  try {
    const res = await axiosInstance.get('users/current');
    return res.data;
  } catch (err) {
    throw err;
  }
};
