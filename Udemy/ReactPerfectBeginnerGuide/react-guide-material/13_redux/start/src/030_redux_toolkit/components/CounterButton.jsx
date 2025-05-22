import { useDispatch } from "react-redux";
// import { add, minus } from "../store/modules/counter"
import { increment, decrement } from "../store/counterSlice";

const CounterButton = ({ calcType, step }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    const action = calcType === "+" ? increment(step) : decrement(step);
    console.log(action);
    dispatch(action);
  };

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
