import { create } from 'zustand';
import { createCategorySlice, CategoryStore } from './category/categorySllice';

const useStore = create<CategoryStore>()((...a) => ({
  ...createCategorySlice(...a),
}));

export default useStore;
