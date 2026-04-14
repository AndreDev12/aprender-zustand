import { useShallow } from 'zustand/react/shallow';

import { useTwoBearStore } from '../store';

export const OneBearCounter = () => {
  const { bears, increase } = useTwoBearStore(
    useShallow((state) => ({ bears: state.bears, increase: state.increase })),
  );

  return (
    <>
      <h2>OneBearCounter</h2>
      <div>
        <span>{bears} bears</span>
        <button onClick={() => increase(12)}>Increase by 12</button>
      </div>
    </>
  );
};
