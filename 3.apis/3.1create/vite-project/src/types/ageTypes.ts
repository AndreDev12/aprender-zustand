export type AgeState = {
  age: number;
};

export type AgeActions = {
  setAge: (
    nextAge:
      | AgeState['age']
      | ((currentAge: AgeState['age']) => AgeState['age']),
  ) => void;
};
