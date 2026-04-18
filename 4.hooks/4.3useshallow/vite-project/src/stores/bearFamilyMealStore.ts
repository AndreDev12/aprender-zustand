import { create } from 'zustand';

import type { BearStore } from '../types';

export const useBearFamilyMealsStore = create<BearStore>()(() => ({
  papaBear: 'large porridge-pot',
  mamaBear: 'middle-size porridge pot',
  babyBear: 'A little, small, wee pot',
}));
