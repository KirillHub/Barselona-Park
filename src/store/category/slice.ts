import { createSlice } from '@reduxjs/toolkit';
import { CategorySliceState } from './types';

const initialState: CategorySliceState = {
  selectedPageId: 'Select-category',
};

const Category = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    setSelectedPageId: (state, action) => {
      state.selectedPageId = action.payload
    }
  },
  extraReducers: (builder) => {},
});

export const {setSelectedPageId} = Category.actions;
export const categoryReducer = Category.reducer;
