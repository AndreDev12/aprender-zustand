import { create } from 'zustand';

import type { TenBearState } from '../types';

export const useTenBearStore = create<TenBearState>()((set) => ({
  bears: 2,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
}));
