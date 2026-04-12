import { useOneBearStore } from '../store';

export const BearCounter = () => {
  const bears = useOneBearStore((state) => state.bears);

  return <h1>{bears} bears around</h1>;
};
