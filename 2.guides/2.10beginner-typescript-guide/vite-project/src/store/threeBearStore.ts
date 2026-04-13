import { create, type ExtractState } from 'zustand';

import type { ThreeBear, ThreeBearAction } from '../types';

export const useThreeBearStore = create<ThreeBear & ThreeBearAction>((set) => ({
  bears: 3,
  food: 'honey',
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export type ThreeBearState = ExtractState<typeof useThreeBearStore>;
