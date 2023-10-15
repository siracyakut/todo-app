import { useSelector } from "react-redux";

export const useTodo = () => useSelector((state) => state.todo);
