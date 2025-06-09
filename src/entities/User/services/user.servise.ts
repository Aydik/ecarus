import Cookies from 'js-cookie';
import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const getUser = async () => {
  try {
    const accessToken = Cookies.get('accessToken');
    const userId = Cookies.get('userId');
    if (userId && accessToken) {
      const res = await axiosInstance.get(`users/${userId}`);
      return res.data;
    }
    throw new Error('Could not find user');
  } catch (err) {
    throw err;
  }
};
