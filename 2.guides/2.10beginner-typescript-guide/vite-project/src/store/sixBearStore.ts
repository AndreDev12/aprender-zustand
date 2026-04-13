import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import type { SixBearState } from '../types';

export const useSixBearStore = create<SixBearState>()(
  combine({ bears: 0 }, (set) => ({
    increase: () => set((state) => ({ bears: state.bears + 1 })),
  })),
);
