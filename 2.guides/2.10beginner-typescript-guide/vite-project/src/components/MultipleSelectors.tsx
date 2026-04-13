import { useShallow } from 'zustand/react/shallow';

import { useFourBearStore } from '../store';

export const MultipleSelectors = () => {
  const { bears, food } = useFourBearStore(
    useShallow((state) => ({ bears: state.bears, food: state.food })),
  );

  return (
    <div>
      We have {food} units of food for {bears} bears
    </div>
  );
};
