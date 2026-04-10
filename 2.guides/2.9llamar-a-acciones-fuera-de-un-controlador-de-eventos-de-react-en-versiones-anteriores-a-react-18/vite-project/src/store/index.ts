import { create } from 'zustand';
import { unstable_batchedUpdates } from 'react-dom';

import type { Fish, Action } from '../types';

const useFishStore = create<Fish & Action>((set) => ({
  fishes: 0,
  increaseFishes: () => set((state) => ({ fishes: state.fishes + 1 })),
}));

export const nonReactCallback = () => {
  unstable_batchedUpdates(() => {
    useFishStore.getState().increaseFishes();
  });
};
