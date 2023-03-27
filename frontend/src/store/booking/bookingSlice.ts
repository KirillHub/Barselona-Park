import { StateCreator } from "zustand";

export interface BookingStore {
  bookingPrice: number;
  bookingDates: string[];
  startEndDates: { start: string; end: string };
  bookingFullName: string;
  bookingEmail: string;
  bookingNumber: string;
  bookingAdults: string;
  bookingChildren: string;
  bookingComment: string;

  setBookingPrice: (price: number) => void;
  setBookingDates: (dates: string[]) => void;
  setBookingStartEnd: (dates: { start: string; end: string }) => void;
  setBookingFullName: (fullName: string) => void;
  setBookingEmail: (email: string) => void;
  setBookingNumber: (number: string) => void;
  setBookingAdults: (adults: string) => void;
  setBookingChildren: (children: string) => void;

  setBookingComment: (comment: string) => void;
}

export const createBookingSlice: StateCreator<BookingStore> = (set, get) => ({
  bookingPrice: 0,
  bookingDates: [],
  startEndDates: { start: "", end: "" },
  bookingFullName: "",
  bookingEmail: "",
  bookingNumber: "+7 (___) ___-__-__",
  bookingAdults: "",
  bookingChildren: "",
  bookingComment: "",

  setBookingPrice: (price: number) => set(() => ({ bookingPrice: price })),

  setBookingDates: (dates: string[]) =>
    set(state => ({ ...state.bookingDates, bookingDates: dates })),

  setBookingStartEnd: (dates: { start: string; end: string }) =>
    set(() => ({ startEndDates: dates })),

  setBookingFullName: (fullName: string) => set(() => ({ bookingFullName: fullName })),

  setBookingEmail: (email: string) => set(() => ({ bookingEmail: email })),

  setBookingNumber: (number: string) => set(() => ({ bookingNumber: number })),

  setBookingAdults: (adults: string) => set(() => ({ bookingAdults: adults })),

  setBookingChildren: (children: string) => set(() => ({ bookingChildren: children })),

  setBookingComment: (comment: string) => set(() => ({ bookingComment: comment })),
});
