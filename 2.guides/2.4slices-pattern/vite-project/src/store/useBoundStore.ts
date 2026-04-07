import { create } from 'zustand';

import { createFishSlice, createBearSlice } from './slices';
import type { State, Action } from '../types';

type Store = State & Action;

export const useStore = create<Store>((...a) => ({
  ...createFishSlice(...a),
  ...createBearSlice(...a),
}));
