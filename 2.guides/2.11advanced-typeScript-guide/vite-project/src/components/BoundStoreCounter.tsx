import { useBoundStore } from '../store';

export const BoundStoreCounter = () => {
  const bears = useBoundStore((state) => state.bears);
  const fishes = useBoundStore((state) => state.fishes);

  const addBear = useBoundStore((state) => state.addBear);
  const addFish = useBoundStore((state) => state.addFish);
  const eatFish = useBoundStore((state) => state.eatFish);
  const addBoth = useBoundStore((state) => state.addBoth);
  const getBoth = useBoundStore((state) => state.getBoth);

  console.log(getBoth());

  return (
    <>
      <h2>BoundStoreCounter</h2>
      <div>
        <span>{bears} bears</span> <span>{fishes} fishes</span>
        <button onClick={addBear}>Add Bear</button>
        <button onClick={addFish}>Add Fish</button>
        <button onClick={eatFish}>Eat Fish</button>
        <button onClick={addBoth}>Add Both</button>
      </div>
    </>
  );
};
