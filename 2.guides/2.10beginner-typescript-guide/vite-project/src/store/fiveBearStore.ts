import { create } from 'zustand';

import type { FiveBearState } from '../types';

export const useFiveBearStore = create<FiveBearState>()(() => ({
  bears: 3,
  foodPerBear: 2,
}));
