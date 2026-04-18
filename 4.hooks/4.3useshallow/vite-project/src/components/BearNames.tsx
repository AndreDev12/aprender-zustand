import { useShallow } from 'zustand/react/shallow';

import { useBearFamilyMealsStore } from '../stores';

export const BearNames = () => {
  const names = useBearFamilyMealsStore(
    useShallow((state) => Object.keys(state)),
  );

  return (
    <>
      <h2>BearNames</h2>
      <div>{names.join(', ')}</div>
    </>
  );
};
