export type Bears = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};
