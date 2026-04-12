import { initialState } from '../store';

export type BearState = typeof initialState & {
  increase: (by: number) => void;
  reset: () => void;
};
