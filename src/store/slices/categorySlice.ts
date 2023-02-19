import { StateCreator } from 'zustand';
import IGuests from '../types/IGuests';

const createTodoSlice: StateCreator<IGuests> = (set, get) => ({
  guests: 1,
  plusGuests() {
    set((state) => ({ guests: state.guests + 1 }));
  },
  minusGuests() {
    set((state) => ({ guests: state.guests - 1 }));
  },
});

export default createTodoSlice;
