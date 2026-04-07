import type { StateCreator } from 'zustand';

import type { State, Action } from '../../types';

type Store = State & Action;

export const createFishSlice: StateCreator<Store> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes! + 1 })),
});

export const createBearSlice: StateCreator<Store> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears! + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes! - 1 })),
});
