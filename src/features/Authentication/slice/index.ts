import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isOpened: boolean;
}

const initialState: AuthState = {
  isOpened: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsOpened(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
    },
  },
});

export const { setIsOpened } = authSlice.actions;
export default authSlice.reducer;
