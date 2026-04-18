import { useAgeStore } from '../stores';

export const AgeCounter = () => {
  const age = useAgeStore((state) => state.age);
  const setAge = useAgeStore((state) => state.setAge);

  function increment() {
    setAge((qty) => qty + 1);
  }

  return (
    <>
      <h2>AgeCounter</h2>
      <div>
        <button onClick={increment}>Increment by 1</button>
        <span>{age}</span>
        <button
          onClick={() => {
            increment();
            increment();
            increment();
          }}
        >
          Increment by 3
        </button>
      </div>
    </>
  );
};
