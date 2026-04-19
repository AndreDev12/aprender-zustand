import { useJungleStore } from '../stores';

export const JungleCounter = () => {
  const bears = useJungleStore((state) => state.bears);
  const fishes = useJungleStore((state) => state.fishes);

  const addBear = useJungleStore((state) => state.addBear);
  const addFish = useJungleStore((state) => state.addFish);

  return (
    <>
      <h2>JungleCounter</h2>
      <div>
        <span>{bears} bears</span>
        <br />
        <span>{fishes} fishes</span>
        <br />
        <button onClick={addBear}>Add bear</button>{' '}
        <button onClick={addFish}>Add fish</button>
      </div>
    </>
  );
};
