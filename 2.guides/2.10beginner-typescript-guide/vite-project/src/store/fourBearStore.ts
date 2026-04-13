import { create } from 'zustand';

import type { FourBearState } from '../types';

export const useFourBearStore = create<FourBearState>()(() => ({
  bears: 2,
  food: 10,
}));
