import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Goal {
  title: string;
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

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
