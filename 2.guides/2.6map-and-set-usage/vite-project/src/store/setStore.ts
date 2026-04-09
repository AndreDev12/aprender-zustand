import { create } from 'zustand';

export const useSetStore = create(() => ({
  bar: new Set([1, 2, 3, 4, 5] as number[]),
}));
