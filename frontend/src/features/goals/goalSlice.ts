import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalService from './goalService';

export interface Goal {
  text: string;
}

// const goals: Goal[] | null = JSON.parse(
//   localStorage.getItem('goals') ?? 'null'
// );

export interface GoalState {
  goals: Goal[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: GoalState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new goal
export const createGoal = createAsyncThunk(
  'goal/create',
  async (goalData: Goal, thunkAPI) => {
    try {
      const token: string = (thunkAPI.getState() as any).auth.user.token; // HACK: any type
      return await goalService.createGoal(goalData, token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
