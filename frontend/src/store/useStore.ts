import { ApartmentStore, createApartmentSlice } from "./apartment/apartmentSlice";
import { BookingStore, createBookingSlice } from "./booking/bookingSlice";
import { CategoryStore, createCategorySlice } from "./category/categorySllice";

import { create } from "zustand";

type CombinedStore = CategoryStore & ApartmentStore & BookingStore;

const useStore = create<CombinedStore>()((...data) => ({
  ...createCategorySlice(...data),
  ...createApartmentSlice(...data),
  ...createBookingSlice(...data),
}));

export default useStore;
