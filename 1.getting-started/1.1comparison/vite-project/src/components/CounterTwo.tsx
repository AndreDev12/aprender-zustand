import { useCountStoreTwo } from '../store';

export const CounterTwo = () => {
  const { count, dispatch } = useCountStoreTwo();
  const QTY = 7;

  return (
    <>
      <h2>CounterTwo</h2>
      <div>
        <button onClick={() => dispatch({ type: 'decrement', qty: QTY })}>
          Decrement {QTY}
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: 'increment', qty: QTY })}>
          Increment {QTY}
        </button>
      </div>
    </>
  );
};
