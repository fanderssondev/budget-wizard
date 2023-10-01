import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import { UserData } from '../../pages/Register';

export type UserType = UserData | null;

// Get user from local storage
const userString = localStorage.getItem('user');
const user: UserType = userString ? JSON.parse(userString) : null;

export interface State {
  user: UserType;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user: UserType, thunkAPI) => {
    try {
      const response = await authService.register(user);
      return response.data;
    } catch (error: any) {
      const message =
        (error.message &&
          error.response?.data &&
          error.response.data?.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
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
export default authSlice.reducer;
