import { connect } from "react-redux";
// actionとして定義した、toggleTodoをimportします。
import { toggleTodo } from "../actions";
// stateとdispatchメソッドを渡す先であるコンポーネントをimportします。
import TodoList from "../components/TodoList";

// これはStateをコンポーネントに渡すための準備です。
// [todos]という名前でStateを渡します。
const mapStateToProps = (state) => ({
  todos: state,
});

// これは、Dispatchメソッドをコンポーネントに渡すための準備です。
// toggleTodo という関数を渡します。
// この関数は、TodoのIdのみの情報を必要としています。
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

// 上で定義したtodos と toggleTodoをTodoListコンポーネントに渡しています。
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
