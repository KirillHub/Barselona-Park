import { create } from "zustand";

import { createCategorySlice, CategoryStore } from "./category/categorySllice";
import { createApartmentSlice, ApartmentStore } from "./apartment/apartmentSlice";

type CombinedStore = CategoryStore & ApartmentStore;

const useStore = create<CombinedStore>()((...a) => ({
  ...createCategorySlice(...a),
  ...createApartmentSlice(...a),
}));

export default useStore;
