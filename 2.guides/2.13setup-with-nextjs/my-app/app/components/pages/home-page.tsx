import { useCounterStore } from '@/providers';

export const HomePage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  );

  return (
    <div>
      Count: {count}
      <hr />
      <button onClick={incrementCount}>Increment count</button>
      <button onClick={decrementCount}>Decrement count</button>
    </div>
  );
};
