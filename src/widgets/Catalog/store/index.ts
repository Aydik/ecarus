import { configureStore } from '@reduxjs/toolkit';
import { sortSlice } from 'features/ProductsSort/slices';
import { filterSlice } from 'src/features/ProductsFilters/slices';

export const store = configureStore({
  reducer: {
    sort: sortSlice.reducer,
    filters: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
