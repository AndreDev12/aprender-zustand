export type SomeStoreState = {
  bears: number;
  cat: number;
};

export type SomeStoreActions = {
  addBears: () => void;
  addCat: () => void;
  reset: () => void;
};
