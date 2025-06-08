import { axiosInstance } from 'shared/api/axiosInstance.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CitiesEntity } from 'app/models/generated';

export const getCities = async () => {
  try {
    const res = await axiosInstance.get('cities');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const fetchCities = createAsyncThunk<CitiesEntity[]>(
  'city/fetchCities',
  async (_, { rejectWithValue }) => {
    try {
      return await getCities();
    } catch (error: any) {
      return rejectWithValue(error.message ?? 'Ошибка при загрузке городов');
    }
  },
);
