import { StateCreator } from "zustand";

export interface ApartmentStore {
  similarOptions: string;

  setSimilarOptions: (option: string) => void;
}

export const createApartmentSlice: StateCreator<ApartmentStore> = (
  set,
  get
) => ({
  similarOptions: "price",

  setSimilarOptions: (option: string) =>
    set(() => ({ similarOptions: option })),
});
