export type CounterState = {
  count: number;
};

type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;
