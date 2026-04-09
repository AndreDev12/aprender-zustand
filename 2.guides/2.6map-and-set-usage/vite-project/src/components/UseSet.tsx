/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useSetStore } from '../store';

export const UseSet = () => {
  useSetStore.setState((state) => ({
    bar: new Set(state.bar).add(6),
  }));

  useSetStore.setState((state) => {
    const next = new Set(state.bar);
    next.delete(6);

    return {
      bar: next,
    };
  });

  useSetStore.setState((state) => {
    const next = new Set(state.bar);
    next.has(5) ? next.delete(5) : next.add(5);

    return {
      bar: next,
    };
  });

  useSetStore.setState({ bar: new Set() });

  const foo = useSetStore((state) => state.bar);
  console.log(foo);

  return <div>UseSet</div>;
};
