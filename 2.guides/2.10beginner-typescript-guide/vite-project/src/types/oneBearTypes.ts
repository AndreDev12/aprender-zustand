export type Bear = {
  bears: number;
  food: string;
};

export type Action = {
  feed: (food: string) => void;
};
