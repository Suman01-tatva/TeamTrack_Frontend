import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for loading
interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

// Create a slice for loading state
const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
