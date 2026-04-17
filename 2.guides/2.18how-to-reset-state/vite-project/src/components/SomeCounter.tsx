import { useSomeStore } from '../stores';

export const SomeCounter = () => {
  const bears = useSomeStore((state) => state.bears);
  const cat = useSomeStore((state) => state.cat);

  const addBears = useSomeStore((state) => state.addBears);
  const addCat = useSomeStore((state) => state.addCat);
  const reset = useSomeStore((state) => state.reset);

  return (
    <>
      <h2>SomeCounter</h2>
      <div>
        <p>Bears: {bears}</p>
        <p>Cat: {cat}</p>
        <button onClick={addBears}>Add Bears</button>
        <button onClick={addCat}>Add Cat</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};
