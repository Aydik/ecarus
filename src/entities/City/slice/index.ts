import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesEntity } from 'app/models/generated';

interface CityState {
  city: CitiesEntity | null;
}

const initialState: CityState = {
  city: null,
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<CitiesEntity>) {
      state.city = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
