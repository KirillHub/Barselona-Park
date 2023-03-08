import { StateCreator } from 'zustand';

export interface CategoryStore {
  selectedPageId: string;
  checkSign: boolean[];
  signIndex: number;

  opitionsSortedLink: string;
  checkBox: boolean[];

  guests: number;

  nights: number;

  apartmentsLength: number;

  setSelectedPageId: (pageId: string) => void;
  setCheckSign: (index: number) => void;
  setOpitionsSortedLink: (link: string) => void;
  setCheckBox: (box: boolean[]) => void;
  updateGuests: (increment: boolean) => void;

  setNights: (length: number) => void;

  setApartmentsLength: (length: number) => void;
}

export const createCategorySlice: StateCreator<CategoryStore> = (set, get) => ({
  selectedPageId: 'Select-category',

  checkSign: [true, true, true, true, true, true],

  signIndex: 10,

  opitionsSortedLink: '',

  checkBox: [false, false, false, false, false, false],

  guests: 1,

  nights: 1,

  apartmentsLength: 0,

  setSelectedPageId: (pageId: string) => set(() => ({ selectedPageId: pageId })),

  setCheckSign: (index: number) =>
    set((state) => {
      const sign = [...state.checkSign];
      sign.splice(index, 1, !sign[index]);

      return {
        checkSign: sign,
        signIndex: index,
      };
    }),

  setOpitionsSortedLink: (link: string) => set(() => ({ opitionsSortedLink: link })),

  setCheckBox(box: boolean[]) {
    set((state) => ({ ...state.checkBox, checkBox: box }));
  },

  updateGuests: (increment: boolean) =>
    set((state) => ({
      guests:
        increment && state.guests < 8
          ? state.guests + 1
          : !increment && state.guests > 1
          ? state.guests - 1
          : state.guests,
    })),

  setNights: (length: number) => set(() => ({ nights: length })),

  setApartmentsLength: (length: number) => set(() => ({ apartmentsLength: length })),
});
