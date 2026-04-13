import { create } from 'zustand';

import type { BearData, NineBearState } from '../types';

export const useNineBearStore = create<NineBearState>()((set) => ({
  bears: 0,
  fetchBears: async () => {
    const res = await fetch('/api/bears');
    const data: BearData = await res.json();

    set({ bears: data.count });
  },
}));
