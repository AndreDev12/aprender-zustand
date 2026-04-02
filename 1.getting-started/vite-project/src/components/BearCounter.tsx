import { useBear } from '../store';

export const BearCounter = () => {
  // const {
  //   bears,
  //   increasePopulation,
  //   decreasePopulation,
  //   removeAllBears,
  //   updateBears,
  // } = useBear();
  const bears = useBear((state) => state.bears);
  const increasePopulation = useBear((state) => state.increasePopulation);
  const decreasePopulation = useBear((state) => state.decreasePopulation);
  const removeAllBears = useBear((state) => state.removeAllBears);
  const updateBears = useBear((state) => state.updateBears);

  return (
    <>
      <h2>BearCounter</h2>

      <div>
        <button onClick={increasePopulation}>Increment</button>
        <button onClick={decreasePopulation}>Decrement</button>
        <button onClick={removeAllBears}>Reset</button>
        <button onClick={() => updateBears(9)}>Update to 9</button>
        <p>{bears}</p>
      </div>
    </>
  );
};
