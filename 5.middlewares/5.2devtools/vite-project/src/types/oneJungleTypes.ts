type JungleState = {
  bears: number;
  fishes: number;
};

type JungleActions = {
  addBear: () => void;
  addFish: () => void;
};

export type JungleStore = JungleState & JungleActions;
