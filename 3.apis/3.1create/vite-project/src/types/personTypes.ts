type PersonStoreState = {
  person: { firstName: string; lastName: string; email: string };
};

type PersonStoreActions = {
  setPerson: (nextPerson: PersonStoreState['person']) => void;
};

export type PersonStore = PersonStoreState & PersonStoreActions;
