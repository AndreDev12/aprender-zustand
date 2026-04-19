export type BearSlice = {
  bears: number;
  addBear: () => void;
};

export type FishSlice = {
  fishes: number;
  addFish: () => void;
};

export type JungleStore = BearSlice & FishSlice;
