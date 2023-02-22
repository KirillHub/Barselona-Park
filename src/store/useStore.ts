import { create } from 'zustand';
import { createCategorySlice, IGuests } from './category/categorySllice';

const useStore = create<IGuests>()((...a) => ({
  ...createCategorySlice(...a),
}));

export default useStore;
