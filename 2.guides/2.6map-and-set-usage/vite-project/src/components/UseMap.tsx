import { useMapStore } from '../store';

export const UseMap = () => {
  useMapStore.setState((state) => ({
    foo: new Map(state.foo).set('c', 4),
  }));

  useMapStore.setState((state) => {
    const next = new Map(state.foo);
    next.delete('c');
    return {
      foo: next,
    };
  });

  useMapStore.setState((state) => {
    const next = new Map(state.foo);
    next.set('a', 100);
    next.set('b', 200);
    return {
      foo: next,
    };
  });

  useMapStore.setState({ foo: new Map() });

  const foo = useMapStore((state) => state.foo);

  console.log(foo);

  return <div>MapAndSet</div>;
};
