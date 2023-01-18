import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { categoryReducer } from './category/slice';
import { apartmentReducer } from './apartment/slice';

export const store = configureStore({
  reducer: {
    categoryPage: categoryReducer,
    apartmentPage: apartmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
