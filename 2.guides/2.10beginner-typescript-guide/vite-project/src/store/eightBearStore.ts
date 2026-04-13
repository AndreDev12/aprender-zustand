import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { EightBearState } from '../types';

export const useEightBearStore = create<EightBearState>()(
  persist(
    (set) => ({
      bears: 0,
      increase: () => set((state) => ({ bears: state.bears + 1 })),
    }),
    { name: 'bear-storage' },
  ),
);
