import store from "store";
import { _addTodo, _removeTodo, _setTodo, _updateTodo } from "store/todo";

export const addTodo = (data) => store.dispatch(_addTodo(data));
export const removeTodo = (data) => store.dispatch(_removeTodo(data));
export const setTodo = (data) => store.dispatch(_setTodo(data));
export const updateTodo = (id, name) =>
  store.dispatch(_updateTodo({ id, name }));
