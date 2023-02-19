import { create } from 'zustand';
import IGuests from './types/IGuests';
import createCategorySlice from './slices/categorySlice';

const useStore = create<IGuests>()((...a) => ({
  ...createCategorySlice(...a),
}));

export default useStore;
