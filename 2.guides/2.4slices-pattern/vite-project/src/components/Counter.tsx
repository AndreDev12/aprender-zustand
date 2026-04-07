import { useBoundStore } from '../store';

export const Counter = () => {
  const fishes = useBoundStore((state) => state.fishes);
  const addFish = useBoundStore((state) => state.addFish);

  const bears = useBoundStore((state) => state.bears);
  const addBear = useBoundStore((state) => state.addBear);
  const eatFish = useBoundStore((state) => state.eatFish);

  const addBearAndFish = useBoundStore((state) => state.addBearAndFish);

  return (
    <>
      <div>
        <span>Fishes:{fishes}</span>
        <button onClick={addFish}>Add fish</button>
      </div>
      <div>
        <span>Bears: {bears}</span>
        <button onClick={addBear}>Add bear</button>
        <button onClick={eatFish}>Eat fish</button>
        <button onClick={addBearAndFish}>Add bear and fish</button>
      </div>
    </>
  );
};
