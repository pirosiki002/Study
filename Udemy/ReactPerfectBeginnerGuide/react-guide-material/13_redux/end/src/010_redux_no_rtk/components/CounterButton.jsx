import { useDispatch } from "react-redux";
// 使用していないCounterContextのimport削除

const CounterButton = ({ calcType, step }) => {
  const dispatch = useDispatch();
  // const dispatch = useCounterDispatch();

  const clickHandler = () => {
    // 元のコード: calcTypeをそのままアクションタイプとして使用
    // dispatch({ type: calcType, step });

    // 修正: calcTypeを適切なアクションタイプに変換
    // Reduxのアクションタイプは定数として定義するのがベストプラクティス
    const actionType = calcType === "+" ? "INCREMENT" : "DECREMENT";
    dispatch({ type: actionType, step });
  };

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
