export type Count = {
  count: number;
};

export type CountOneActions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};
