export type BearData = {
  count: number;
};

export type NineBearState = {
  bears: number;
  fetchBears: () => Promise<void>;
};
