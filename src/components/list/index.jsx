import SingleToDo from "components/single-todo";
import { useTodo } from "store/todo/hooks";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function ToDoList() {
  const todo = useTodo();
  const [anim] = useAutoAnimate();

  return (
    <ul ref={anim} className="flex flex-col w-full md:max-w-2xl">
      {todo.todos.map((currentTodo) => (
        <SingleToDo key={currentTodo.id} todo={currentTodo} />
      ))}
    </ul>
  );
}
