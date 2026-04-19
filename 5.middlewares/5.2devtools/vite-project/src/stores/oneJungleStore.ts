import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { JungleStore } from '../types';

export const useJungleStore = create<JungleStore>()(
  devtools((set) => ({
    bears: 0,
    fishes: 0,
    addBear: () =>
      set((state) => ({ bears: state.bears + 1 }), undefined, 'jungle/addBear'),
    addFish: () =>
      set(
        (state) => ({ fishes: state.fishes + 1 }),
        undefined,
        'jungle/addFish',
      ),
  })),
);
