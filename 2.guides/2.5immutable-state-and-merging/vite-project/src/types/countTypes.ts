export type CountOne = {
  count: number;
};

export type CountTwo = {
  nested: {
    count: number;
  };
};

export type Action = {
  inc: () => void;
};
