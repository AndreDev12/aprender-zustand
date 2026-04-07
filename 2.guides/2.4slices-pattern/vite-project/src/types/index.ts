export type State = {
  fishes?: number;
  bears?: number;
};

export type Action = {
  addFish?: () => void;
  addBear?: () => void;
  eatFish?: () => void;
  addBearAndFish?: () => void;
};
