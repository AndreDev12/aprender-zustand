export type GrumpyState = {
  grumpiness: number;
};

export type GrumpyActions = {
  dispatch: (args: GrumpyAction) => void;
};

export type GrumpyAction = {
  type: 'increment' | 'decrement';
  by?: number;
};
