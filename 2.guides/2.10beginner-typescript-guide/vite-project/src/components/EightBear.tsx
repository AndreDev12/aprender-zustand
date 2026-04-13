import { useShallow } from 'zustand/react/shallow';

import { useEightBearStore } from '../store';

export const EightBear = () => {
  const { bears, increase } = useEightBearStore(
    useShallow((state) => ({ bears: state.bears, increase: state.increase })),
  );

  return (
    <div>
      <span>{bears} bears</span>
      <button onClick={increase}>Increase a bear</button>
    </div>
  );
};
