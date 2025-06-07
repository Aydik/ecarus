import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const limit = 12;

export const getProducts = async (page = 0) => {
  try {
    const offset = page * limit;
    const res = await axiosInstance.get('products', {
      params: {
        limit,
        offset,
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const buyProduct = async (productId: number, cityId: number, count: number = 0) => {
  try {
    await axiosInstance.post('products/buy', {
      params: {
        productId: productId,
        count: count,
        cityId: cityId,
      },
    });
    return;
  } catch (err) {
    throw err;
  }
};
