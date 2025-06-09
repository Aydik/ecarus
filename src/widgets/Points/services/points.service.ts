import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const getPoints = async (cityId: number) => {
  try {
    const res = await axiosInstance.get(`cities/${cityId}/stores`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
