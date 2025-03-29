import PropTypes from "prop-types";

// disp list component
const List = ({ list, setList }) => {
  const onDelete = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  if (!list) return null;

  return (
    <>
      {list.map((todo) => (
        <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
          <button onClick={() => onDelete(todo.id)}>完了</button>
          <p style={{ margin: 0 }}>{todo.content}</p>
        </div>
      ))}
    </>
  );
};

// 練習コードとしては難しい気がする。もっと簡単な方法がありそう。。
// PropTypesの定義
List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  setList: PropTypes.func.isRequired,
};
export default List;
