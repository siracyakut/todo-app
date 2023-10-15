import ToDoInput from "components/input";
import ToDoList from "components/list";
import ThemeButtons from "components/theme-buttons";

export default function Home() {
  return (
    <>
      <div className="p-4 rounded-lg font-bold text-4xl">My Task List</div>
      <ToDoInput />
      <ToDoList />
      <ThemeButtons />
    </>
  );
}
