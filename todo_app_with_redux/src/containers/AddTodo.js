import React from "react";
// [connect] は、component ないでdispatchを使えるようにするために必要です。
import { connect } from "react-redux";
import { addTodo } from "../actions";
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          // ページのリロードを防ぐ
          e.preventDefault();
          // 入力された文字列が空だった場合にはこれより先のコードは実行されません
          if (!input.value.trim()) {
            return;
          }
          // dispatchメソッドを実行します
          dispatch(addTodo(input.value));
          // 投稿ボタンを押したあとに、テキストボックスの中身を空にします。
          input.value = "";
        }}
      >
        {/*
          refを使用してDOM要素への参照を取得
          - nodeパラメータは、この入力要素のDOM要素
          - input = node で、上で定義したinput変数にDOM要素への参照を保存
          - これにより、フォームのsubmit時にinput.valueで入力値を取得可能
          - Reactでは通常はcontrolled componentsを使用することが推奨されますが、
            これはuncontrolled componentsの例です
        */}
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

// ここでconnectを使用
export default connect()(AddTodo);
