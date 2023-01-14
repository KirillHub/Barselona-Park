import { createSlice } from '@reduxjs/toolkit';
import { CategorySliceState } from './types';

const initialState: CategorySliceState = {
  selectedPageId: 'Select-category',
  checkSign: [true, true, true, true, true, true],
  signIndex: 10,
};

const Category = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    setSelectedPageId: (state, action) => {
      state.selectedPageId = action.payload;
    },
    setCheckSign: (state, action) => {
      const sign = state.checkSign;

      state.signIndex = action.payload;

      if (sign[action.payload]) {
        sign.splice(action.payload, 1, false);
        state.checkSign = sign;
      } else {
        sign.splice(action.payload, 1, true);
        state.checkSign = sign;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { setSelectedPageId, setCheckSign } = Category.actions;
export const categoryReducer = Category.reducer;
