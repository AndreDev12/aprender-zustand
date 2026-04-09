import { useShallow } from 'zustand/react/shallow';

import { useMealStore } from '../store';

export const BearNames = () => {
  const names = useMealStore(useShallow((state) => Object.keys(state)));

  useMealStore.setState({ papaBear: 'a large pizza' });

  return <div>{names.join(', ')}</div>;
};
