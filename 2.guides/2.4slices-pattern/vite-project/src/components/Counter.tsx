import { useStore } from '../store';

export const Counter = () => {
  const fishes = useStore((state) => state.fishes);
  const addFish = useStore((state) => state.addFish);

  const bears = useStore((state) => state.bears);
  const addBear = useStore((state) => state.addBear);
  const eatFish = useStore((state) => state.eatFish);

  return (
    <>
      <div>
        <span>{fishes}</span>
        <button onClick={addFish}>Add fish</button>
      </div>
      <div>
        <span>{bears}</span>
        <button onClick={addBear}>Add bear</button>
        <button onClick={eatFish}>Eat fish</button>
      </div>
    </>
  );
};
