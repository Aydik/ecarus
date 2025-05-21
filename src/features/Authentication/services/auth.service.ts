import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const getSexes = async () => {
  try {
    const res = await axiosInstance.get('handbooks/sexes');
    return res.data;
  } catch (err) {
    throw err;
  }
};
