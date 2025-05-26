import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// Storeを作成するもの
// import { createStore } from 'redux'　// 古い情報のため削除
import { configureStore } from "@reduxjs/toolkit";
// Storeを提供するもの
import { Provider } from "react-redux";
// 定義したReducer
import todosReducer from "./reducers";

//  引数にはReducerと、Redux DevToolsを利用可能にするためのものを渡します。
// const store = createStore(
//   todosReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore({
  reducer: todosReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // 新しい書き方では、createRoot の時点でroot要素を指定し、render メソッドではコンポーネントのみを渡すようになっています
  // document.getElementById('root')
);
