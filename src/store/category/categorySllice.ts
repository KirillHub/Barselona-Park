import { StateCreator } from 'zustand';

export interface IGuests {
  selectedPageId: string;
  checkSign: boolean[];
  signIndex: number;

  opitionsSortedLink: string;
  checkBox: boolean[];

  setSelectedPageId: (pageId: string) => void;
  setCheckSign: (index: boolean[]) => void;
  setSignIndex: (index: number) => void;
  setOpitionsSortedLink: (index: string) => void;
  setCheckBox: (index: boolean[]) => void;
}

export const createCategorySlice: StateCreator<IGuests> = (set, get) => ({
  selectedPageId: 'Select-category',
  checkSign: [true, true, true, true, true, true],
  signIndex: 10,

  opitionsSortedLink: '',
  checkBox: [false, false, false, false, false, false],

  setSelectedPageId(pageId) {
    set((state) => ({ selectedPageId: (state.selectedPageId = pageId) }));
  },

  setCheckSign(index) {
    set((state) => ({...state.checkSign,  checkSign: (state.checkSign = index) }));
  },

  setSignIndex(index) {
    set((state) => ({ signIndex: (state.signIndex = index) }));
  },

  setOpitionsSortedLink(index) {
    set((state) => ({ opitionsSortedLink: (state.opitionsSortedLink = index) }));
  },

  setCheckBox(index) {
    set((state) => ({...state.checkBox, checkBox: (state.checkBox = index) }));
  },
});
