import type { ThreeBearState } from '../store';

export function logBearState(state: ThreeBearState) {
  console.log(`We have ${state.bears} bears eating ${state.food}`);
}
