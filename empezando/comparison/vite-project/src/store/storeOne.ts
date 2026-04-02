import { create } from 'zustand';

import type { Count, CountOneActions } from '../types';

export const useCountStoreOne = create<Count & CountOneActions>((set) => ({
  count: 0,
  increment: (qty) => set((state) => ({ count: state.count + qty })),
  decrement: (qty) => set((state) => ({ count: state.count - qty })),
}));
