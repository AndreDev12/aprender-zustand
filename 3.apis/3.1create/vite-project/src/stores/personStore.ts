import { create } from 'zustand';

import type { PersonStore } from '../types';

export const usePersonStore = create<PersonStore>()((set) => ({
  person: {
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  },
  setPerson: (nextPerson) => set({ person: nextPerson }),
}));
