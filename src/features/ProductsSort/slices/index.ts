import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sort } from 'features/ProductsSort/types';

interface SortState {
  sortBy: Sort;
}

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
