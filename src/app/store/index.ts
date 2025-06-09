import { configureStore } from '@reduxjs/toolkit';
import citySlice from 'entities/City/slice';
import authSlice from 'features/Authentication/slice';
import userSlice from 'entities/User/slice';

export const store = configureStore({
  reducer: {
    city: citySlice,
    auth: authSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
