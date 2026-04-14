import { create } from 'zustand';

import type { OneBearState } from '../types';

export const useOneBearStore = create<OneBearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
