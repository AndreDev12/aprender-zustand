import { create } from 'zustand';

import type { State, Action } from '../types';

export const useBoundStoreOne = create<State & Action>((set) => ({
  count: 0,
  text: 'Hello',
  inc: () => set((state) => ({ count: state.count + 1 })),
  setText: (text) => set({ text }),
}));
