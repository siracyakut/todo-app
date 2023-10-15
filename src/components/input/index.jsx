import { useState } from "react";
import { nanoid } from "nanoid";
import { addTodo } from "store/todo/actions";

export default function ToDoInput() {
  const [todoName, setTodoName] = useState("");

  const handleAdd = () => {
    if (!(!todoName || !todoName.trim())) {
      addTodo({
        id: nanoid(),
        name: todoName,
        do: false,
      });
      setTodoName("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleAdd();
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <input
        type="text"
        placeholder="ENTER TASK"
        className="w-[200px] md:w-[360px] h-[60px] text-white text-2xl bg-[#080c0b] p-4 mr-5 focus:border focus:border-[#379f88] outline-none focus:ring-4 focus:ring-[#379f88] placeholder: rounded-lg transition duration-150"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button
        type="button"
        className="h-[60px] w-[60px] flex items-center justify-center bg-accent p-2 outline-none transition duration-150 rounded-lg"
        onClick={() => handleAdd()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-black"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
