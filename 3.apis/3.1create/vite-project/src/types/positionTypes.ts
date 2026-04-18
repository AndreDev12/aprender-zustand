type PositionStoreState = {
  position: { x: number; y: number };
};

type PositionStoreActions = {
  setPosition: (nextPosition: PositionStoreState['position']) => void;
};

export type PositionStore = PositionStoreState & PositionStoreActions;
