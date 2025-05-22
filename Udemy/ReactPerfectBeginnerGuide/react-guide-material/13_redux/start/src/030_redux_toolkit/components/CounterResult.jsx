import { useSelector } from "react-redux";
const CounterResult = () => {
  // const state = useSelector(state => state);
  // return <h3>{state.counter}</h3>;
  const counter = useSelector((state) => state.counter.value);
  return <h3>{counter}</h3>;
};

export default CounterResult;
