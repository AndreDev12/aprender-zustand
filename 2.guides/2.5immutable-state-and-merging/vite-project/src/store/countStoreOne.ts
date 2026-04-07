import { create } from 'zustand';

import type { CountOne, Action } from '../types';

export const useCountStoreOne = create<CountOne & Action>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
