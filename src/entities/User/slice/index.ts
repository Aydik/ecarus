import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDto } from 'app/models/generated';
import { getUser } from 'entities/User';

export type User = Omit<UserDto, 'language'>;

interface AuthenticatedState {
  isAuthenticated: true;
  user: User;
}

interface UnauthenticatedState {
  isAuthenticated: false;
  user: null;
}

type UserState = AuthenticatedState | UnauthenticatedState;

const unauthenticatedState: UnauthenticatedState = {
  isAuthenticated: false,
  user: null,
};

const sanitizeUser = (data: Partial<UserDto>): User => ({
  id: data.id ?? 0,
  email: data.email ?? '',
  phone: data.phone ?? '',
  firstName: data.firstName ?? '',
  lastName: data.lastName ?? '',
  isEmailVerified: data.isEmailVerified ?? false,
  enabled: data.enabled ?? false,
  createdAt: data.createdAt ?? '',
  balance: data.balance ?? 0,
});

export const updateUser = createAsyncThunk<User, void, { rejectValue: UnauthenticatedState }>(
  'user/updateUser',
  async (_, { rejectWithValue }) => {
    try {
      const dto = await getUser();
      return sanitizeUser(dto);
    } catch {
      return rejectWithValue(unauthenticatedState);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: unauthenticatedState as UserState,
  reducers: {
    logout: () => unauthenticatedState,
    setUser(state, action: PayloadAction<Partial<UserDto>>) {
      state.isAuthenticated = true;
      state.user = sanitizeUser({
        ...action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
        state.user = payload;
      })
      .addCase(updateUser.rejected, () => unauthenticatedState);
  },
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;
