import { useCountStoreOne } from '../store';

export const CounterOne = () => {
  const { count, increment, decrement } = useCountStoreOne();

  return (
    <>
      <h2>CounterOne</h2>
      <div>
        <button onClick={() => decrement(5)}>Decrement 5</button>
        <span>{count}</span>
        <button onClick={() => increment(5)}>Increment 5</button>
      </div>
    </>
  );
};
