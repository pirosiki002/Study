// 2023/10 存在しないファイルのimportでエラーが出るため修正
// 使用していないCounterContextのimport削除

import { useSelector } from "react-redux";

const CounterResult = () => {
  // 元のコード: オブジェクト全体を表示しようとしていた
  // const state = useSelector(state => state);
  // return <h3>{state}</h3>;

  // 修正: countプロパティのみを取得して表示
  // useSelectorは必要な状態の部分のみを取得するのがベストプラクティス
  const count = useSelector((state) => state.count);
  return <h3>{count}</h3>;
};

export default CounterResult;
