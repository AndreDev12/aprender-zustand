export type State = {
  count: number;
  text: string;
};

export type Action = {
  inc: () => void;
  setText: (text: string) => void;
};
