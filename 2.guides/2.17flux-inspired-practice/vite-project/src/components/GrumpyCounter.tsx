import { useGrumpyStore } from '../stores';

export const GrumpyCounter = () => {
  const grumpiness = useGrumpyStore((state) => state.grumpiness);
  const dispatch = useGrumpyStore((state) => state.dispatch);

  return (
    <>
      <h2>GrumpyCounter</h2>
      <div>
        <button onClick={() => dispatch({ type: 'decrement', by: 4 })}>
          Disminuir en 4
        </button>
        <span>{grumpiness}</span>
        <button onClick={() => dispatch({ type: 'increment', by: 4 })}>
          Incrementar por 4
        </button>
      </div>
    </>
  );
};
