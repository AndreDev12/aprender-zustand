import { create } from 'zustand';

import type { AgeState, AgeActions } from '../types';

export const useAgeStore = create<AgeState & AgeActions>()((set) => ({
  age: 34,
  setAge: (nextAge) =>
    set((state) => ({
      age: typeof nextAge === 'function' ? nextAge(state.age) : nextAge,
    })),
}));
