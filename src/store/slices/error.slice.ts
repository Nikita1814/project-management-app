import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ErrorState } from './types';

const initialState: ErrorState = {};

export const errorSlice = createSlice({
  name: 'errorSlice',
  initialState,
  reducers: {
    updateError: (state, action: PayloadAction<FetchBaseQueryError | SerializedError | null>) => {
      state.error = action.payload;
    },
  },
});

export const errorReducer = errorSlice.reducer;
