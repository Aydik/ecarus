import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesEntity } from 'app/models/generated';
import { getCities } from 'entities/City/services/city.service.ts';

interface CityState {
  cities: CitiesEntity[];
  current: CitiesEntity | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CityState = {
  cities: [],
  current: null,
  status: 'idle',
  error: null,
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

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCurrentCity(state, action: PayloadAction<CitiesEntity>) {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload;
        if (!state.current && action.payload.length > 0) {
          state.current = action.payload[0];
        }
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      }),
});

export const { setCurrentCity } = citySlice.actions;
export default citySlice.reducer;
