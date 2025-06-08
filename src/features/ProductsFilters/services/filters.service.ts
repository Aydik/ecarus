import { axiosInstance } from 'shared/api/axiosInstance.ts';

export const getGenders = async () => {
  try {
    const res = await axiosInstance.get('products/genders');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getProductTypes = async () => {
  try {
    const res = await axiosInstance.get('products/types');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getBrands = async (type: string) => {
  try {
    const res = await axiosInstance.post('products/brands', { params: { type: type } });
    return res.data;
  } catch (err) {
    throw err;
  }
};
