export type ThreeBear = {
  bears: number;
  food: string;
};

export type ThreeBearAction = {
  increase: (by: number) => void;
};
