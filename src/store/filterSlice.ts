import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FilterValue } from '../types/todo';

interface FilterState {
  value: FilterValue;
}

const initialState: FilterState = {
  value: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterValue>) => {
      state.value = action.payload;
    },
  },
});

export default filterSlice.reducer;
