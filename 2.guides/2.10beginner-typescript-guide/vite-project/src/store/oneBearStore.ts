import { create } from 'zustand';

import type { Bear, Action } from '../types';

export const useOneBearStore = create<Bear & Action>()((set) => ({
  bears: 2,
  food: 'honey',
  feed: (food) => set({ food }),
}));
