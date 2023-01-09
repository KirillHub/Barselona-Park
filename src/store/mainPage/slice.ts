// import axios from '../../axios/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {};

const Basket = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = Basket.actions;
export const basketReducer = Basket.reducer;
