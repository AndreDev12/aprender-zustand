import { useCountStoreTwo } from '../store';

export const Count = () => {
  const count = useCountStoreTwo((state) => state.nested.count);
  const inc = useCountStoreTwo((state) => state.inc);

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>+1</button>
    </div>
  );
};
