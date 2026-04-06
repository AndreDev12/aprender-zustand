import { inc, setText, useBoundStoreTwo } from '../store';

export const CounterWithInput = () => {
  const count = useBoundStoreTwo((state) => state.count);
  const text = useBoundStoreTwo((state) => state.text);

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={inc}>+1</button>
      </div>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </>
  );
};
