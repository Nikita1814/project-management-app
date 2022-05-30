import { createSlice } from '@reduxjs/toolkit';
import columnApi from '../services/column.service';
import { ColumnListState } from './types';

const initialState: ColumnListState = {};

export const columnListSlice = createSlice({
  name: 'columnListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      columnApi.endpoints.getColumnList.matchFulfilled,
      (state: ColumnListState, { payload, meta }) => {
        const payloadCopy = payload.slice();
        payloadCopy.sort(function (a, b) {
          return a.order - b.order;
        });
        state[meta.arg.originalArgs as string] = payloadCopy;
      }
    );
  },
});
