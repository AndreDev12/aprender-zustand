import { useTwoBearStore } from '../store';

export const ResetZoo = () => {
  const { bears, increase, reset } = useTwoBearStore();

  return (
    <div>
      <div>{bears}</div>
      <button onClick={() => increase(5)}>Increase by 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
