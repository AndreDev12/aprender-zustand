import { useFiveBearStore } from '../store';

export const TotalFood = () => {
  const totalFood = useFiveBearStore(
    (state) => state.bears * state.foodPerBear,
  );
  return <div>We need {totalFood} jars of honey</div>;
};
