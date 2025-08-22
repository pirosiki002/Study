import axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3003/todo';

// IDを文字列に統一する共通関数
const normalizeId = todo => ({
  ...todo,
  id: String(todo.id),
});

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    console.log(result);
    return result.data;
  },

  async post(todo) {
    const normalizedTodo = normalizeId(todo);
    const result = await axios.post(ENDPOINT_URL, normalizedTodo);
    console.log(result);
    return result.data;
  },

  async delete(todo) {
    const normalizedTodo = normalizeId(todo);
    const result = await axios.delete(ENDPOINT_URL + '/' + normalizedTodo.id);
    console.log(result);
    return result.data;
  },

  async patch(todo) {
    const normalizedTodo = normalizeId(todo);
    const result = await axios.put(
      ENDPOINT_URL + '/' + normalizedTodo.id,
      normalizedTodo
    );
    console.log(result);
    return result.data;
  },
};

// todoApi.getAll();
// todoApi.post({
//   id: "343233332",
//   content: 'test',
// });
todoApi.patch({
  id: '5d87d115-7ebb-4d17-adce-4ffe4b39f8c5',
  content: '買い物その２',
  editing: false,
});

export default todoApi;
