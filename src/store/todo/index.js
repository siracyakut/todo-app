import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    _addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    _removeTodo: (state, action) => {
      state.todos = state.todos.filter((x) => x.id !== action.payload);
    },
    _setTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.do = !todo.do;
        }
        return todo;
      });
    },
    _updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
        return todo;
      });
    },
  },
});

export const { _addTodo, _removeTodo, _setTodo, _updateTodo } = todo.actions;
export default todo.reducer;
