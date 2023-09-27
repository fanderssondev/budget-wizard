import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authservice';

type UserType = string | null;

// Get user from local storage
const user: UserType = JSON.parse(localStorage.getItem('user') ?? 'null');

// const user = null;

type StateType = {
  user: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
};

const initialState: StateType = {
  user: user ? user : null,
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
      return await authService.register(user);
    } catch (error: any) {
      const message =
        (error.message &&
          error.response?.message &&
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
  //   extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
