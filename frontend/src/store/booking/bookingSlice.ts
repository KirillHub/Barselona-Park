import { StateCreator } from "zustand";

export interface BookingStore {
  bookingPrice: number;
  bookingDates: string[];
  startEndDates: { start: string; end: string };

  setBookingPrice: (price: number) => void;
  setBookingDates: (dates: string[]) => void;
  setBookingStartEnd: (dates: { start: string; end: string }) => void;
}

export const createBookingSlice: StateCreator<BookingStore> = (set, get) => ({
  bookingPrice: 0,
  bookingDates: [],

  startEndDates: { start: "", end: "" },

  setBookingPrice: (price: number) => set(() => ({ bookingPrice: price })),

  setBookingDates: (dates: string[]) =>
    set(state => ({ ...state.bookingDates, bookingDates: dates })),

  setBookingStartEnd: (dates: { start: string; end: string }) =>
    set(() => ({ startEndDates: dates })),
});
