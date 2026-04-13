import { logBearState } from '../util';
import { useThreeBearStore } from '../store';

export const ThreeBear = () => {
  logBearState(useThreeBearStore.getState());

  return <div>ThreeBear</div>;
};
