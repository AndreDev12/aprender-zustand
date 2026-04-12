import { create } from 'zustand';

import type { BearState } from '../types';

export const initialState = {
  bears: 0,
  food: 'honey',
};

export const useTwoBearStore = create<BearState>()((set) => ({
  ...initialState,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  reset: () => set(initialState),
}));
