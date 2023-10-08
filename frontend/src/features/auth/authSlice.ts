import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

export interface User {
  name: string;
  email: string;
  password: string;
}

// Get user from localStorage
const user: User | null = JSON.parse(localStorage.getItem('user') ?? 'null');

export interface AuthState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: AuthState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user: User, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      const message = 'sdfjbsdgjbsob';
      // (error.response &&
      //   error.response.data &&
      //   error.response.data.message) ||
      // error.message ||
      // error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export type RootState = ReturnType<typeof authSlice.reducer>;
export default authSlice.reducer;
