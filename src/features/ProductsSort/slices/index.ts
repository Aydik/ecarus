import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sort, SortState } from 'features/ProductsSort/types';

const initialState: SortState = { sortBy: null };

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
