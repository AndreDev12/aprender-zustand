import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { TwoBearState } from '../types';

export const useTwoBearStore = create<TwoBearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      { name: 'bearStore' },
    ),
  ),
);
