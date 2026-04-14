import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { BearSlice, FishSlice, SharedSlice } from '../types';

const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

const createSharedSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  SharedSlice
> = (set, get) => ({
  addBoth: () => {
    get().addBear();
    get().addFish();
  },
  getBoth: () => get().bears + get().fishes,
});

export const useBoundStore = create<BearSlice & FishSlice & SharedSlice>()(
  devtools((...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a),
    ...createSharedSlice(...a),
  })),
);
