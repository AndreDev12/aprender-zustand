import { create } from 'zustand';

import type { GrumpyState, GrumpyActions, GrumpyAction } from '../types';

function grumpyReducer(state: GrumpyState, { type, by = 1 }: GrumpyAction) {
  switch (type) {
    case 'increment':
      return { ...state, grumpiness: state.grumpiness + by };
    case 'decrement':
      return { ...state, grumpiness: state.grumpiness - by };
    default:
      return state;
  }
}

export const useGrumpyStore = create<GrumpyState & GrumpyActions>()((set) => ({
  grumpiness: 0,
  dispatch: (args) => set((state) => grumpyReducer(state, args)),
}));
