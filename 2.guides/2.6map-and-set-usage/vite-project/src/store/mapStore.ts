import { create } from 'zustand';

export const useMapStore = create(() => ({
  foo: new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]),
}));
