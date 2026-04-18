import { create } from 'zustand';

import type { PositionStore } from '../types';

export const usePositionStore = create<PositionStore>()((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (nextPosition) => set({ position: nextPosition }),
}));
