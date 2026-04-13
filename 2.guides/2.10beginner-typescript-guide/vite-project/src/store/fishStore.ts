import { create } from 'zustand';

import type { FishState } from '../types';

export const useFishStore = create<FishState>()((set) => ({
  fish: 5,
  addFish: () => set((state) => ({ fish: state.fish + 1 })),
}));
