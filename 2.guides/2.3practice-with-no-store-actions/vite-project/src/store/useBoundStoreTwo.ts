import { create } from 'zustand';

import type { State } from '../types';

export const useBoundStoreTwo = create<State>(() => ({
  count: 0,
  text: 'Hello',
}));

export const inc = () =>
  useBoundStoreTwo.setState((state) => ({ count: state.count + 1 }));

export const setText = (text: string) => useBoundStoreTwo.setState({ text });
