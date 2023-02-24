import { StateCreator } from 'zustand';

interface CategoryStore {
  selectedPageId: string;
  checkSign: boolean[];
  signIndex: number;

  opitionsSortedLink: string;
  checkBox: boolean[];

  setSelectedPageId: (pageId: string) => void;
  setCheckSign: (index: number) => void;
  setOpitionsSortedLink: (link: string) => void;
  setCheckBox: (box: boolean[]) => void;
}

export const createCategorySlice: StateCreator<CategoryStore> = (set, get) => ({
  selectedPageId: 'Select-category',
  checkSign: [true, true, true, true, true, true],
  signIndex: 10,
  opitionsSortedLink: '',
  checkBox: [false, false, false, false, false, false],

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
});
