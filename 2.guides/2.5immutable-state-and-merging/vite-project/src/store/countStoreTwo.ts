import { create } from 'zustand';

import type { CountTwo, Action } from '../types';

export const useCountStoreTwo = create<CountTwo & Action>((set) => ({
  nested: { count: 0 },
  inc: () =>
    set((state) => ({
      nested: { ...state.nested, count: state.nested.count + 1 },
    })),
}));
