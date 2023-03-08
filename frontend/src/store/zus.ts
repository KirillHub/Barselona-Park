import { create } from 'zustand';

export const useBack = create<{ categoryLink: string }>((set) => ({
  categoryLink: '',
}));
