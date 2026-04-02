import { create } from 'zustand';

import type { Count, CountTwoAction, CountTwoActions } from '../types';

export const useCountStoreTwo = create<Count & CountTwoActions>((set) => ({
  count: 0,
  dispatch: (action: CountTwoAction) =>
    set((state) => countReducer(state, action)),
}));

const countReducer = (state: Count, action: CountTwoAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.qty };
    case 'decrement':
      return { count: state.count - action.qty };
    default:
      return state;
  }
};
