import { axiosInstance } from 'shared/api/axiosInstance.ts';

const limit = 12;

export const getProducts = async (page = 0) => {
  try {
    const offset = page * limit;
    const res = await axiosInstance.get('products', {
      params: {
        limit,
        offset,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
};
