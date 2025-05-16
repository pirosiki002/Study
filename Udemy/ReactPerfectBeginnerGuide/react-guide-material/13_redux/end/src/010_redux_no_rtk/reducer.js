const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        // 元のコード: 固定値で増加
        // count: state.count + 1,

        // 修正: stepパラメータを考慮して増加
        // action.stepが未定義の場合は1を使用（デフォルト値）
        count: state.count + (action.step || 1),
      };
    case "DECREMENT":
      return {
        ...state,
        // 元のコード: 固定値で減少
        // count: state.count - 1,

        // 修正: stepパラメータを考慮して減少
        // action.stepが未定義の場合は1を使用（デフォルト値）
        count: state.count - (action.step || 1),
      };
    default:
      return state;
  }
};

export default reducer;
