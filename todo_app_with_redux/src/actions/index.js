// Action Types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let nextTodoId = 0;

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
