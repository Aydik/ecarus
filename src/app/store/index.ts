import { configureStore } from '@reduxjs/toolkit';
import cityReducer from 'entities/City/slice';
import authSlice from 'features/Authentication/slice';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
