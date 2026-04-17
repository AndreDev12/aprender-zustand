import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { SomeStoreState, SomeStoreActions } from '../types';

export const useSomeStore = create<
  SomeStoreState & SomeStoreActions,
  [['zustand/devtools', never]]
>(
  devtools((set, _get, store) => ({
    bears: 0,
    cat: 0,
    addBears: () => set((state) => ({ bears: state.bears + 5 })),
    addCat: () => set((state) => ({ cat: state.cat + 4 })),
    reset: () => set(store.getInitialState),
  })),
);
