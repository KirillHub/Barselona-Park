import { createSlice } from '@reduxjs/toolkit';
import { ApartmentSliceState, ApartmentType } from './types';

const initialState: ApartmentSliceState = {
  apartment: {} as ApartmentType,
};

const Apartment = createSlice({
  name: 'Apartment',
  initialState,
  reducers: {
    setApartment: (state, action) => {
      state.apartment = action.payload;
    },
  },

});

export const { setApartment } = Apartment.actions;
export const apartmentReducer = Apartment.reducer;
