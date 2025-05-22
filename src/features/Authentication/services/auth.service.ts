import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const registerUser = async () => {
  try {
    const res = await axiosInstance.get('handbooks/sexes');
    return res.data;
  } catch (err) {
    throw err;
  }
};
