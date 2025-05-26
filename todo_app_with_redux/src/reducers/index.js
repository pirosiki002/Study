// https://qiita.com/FarStep131/items/ad834facc57a443a9dc3#redux-%E3%81%A8-react-redux-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6
// Reducerは銀行員（たとえ話
// まず、Reducerを定義します。
// 引数には、stateの初期値と、DispatchされるActionを設定します。
const todosReducer = (state = [], action) => {
  //  そして、Actionのtypeによってデータをどのように変更するのかを、switch文を用いて記述します。
  switch (action.type) {
    // Action のtypeがADD_TODOのとき、
    // 現在のTodoに追加する形でStateを更新します。
    // completedはデフォルトではfalse(未完了)としておく
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    // ActionのtypeがTOGGLE_TODOのとき
    // あるひとつのTodoのCompletedを反転させて上書きします
    // あるひとつのTodoはIdをもとにして探します。
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todosReducer;
