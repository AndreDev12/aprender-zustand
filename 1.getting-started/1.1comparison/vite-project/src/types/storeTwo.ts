export type Count = {
  count: number;
};

export type CountTwoAction = {
  type: 'increment' | 'decrement';
  qty: number;
};

export type CountTwoActions = {
  dispatch: (action: CountTwoAction) => void;
};
