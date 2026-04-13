import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { SevenBearState } from '../types';

export const useSevenBearStore = create<SevenBearState>()(
  devtools((set) => ({
    bears: 0,
    increase: () => set((state) => ({ bears: state.bears + 1 })),
  })),
);
