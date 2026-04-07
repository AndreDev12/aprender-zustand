import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  createFishSlice,
  createBearSlice,
  createBearFishSlice,
} from './slices';
import type { State, Action } from '../types';

type Store = State & Action;

export const useBoundStore = create<Store, [['zustand/persist', Store]]>(
  persist(
    (...a) => ({
      ...createFishSlice(...a),
      ...createBearSlice(...a),
      ...createBearFishSlice(...a),
    }),
    { name: 'bound-store' },
  ),
);
