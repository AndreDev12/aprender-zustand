import { useTenBearStore, useFishStore } from '../store';

export const Zoo = () => {
  const { bears, addBear } = useTenBearStore();
  const { fish, addFish } = useFishStore();

  return (
    <div>
      <div>
        {bears} bears and {fish} fish
      </div>
      <button onClick={addBear}>Add bear</button>
      <button onClick={addFish}>Add fish</button>
    </div>
  );
};
