import { removeTodo, setTodo, updateTodo } from "store/todo/actions";
import classNames from "classnames";
import { useRef, useState } from "react";
import { useClickAway, useKeyPressEvent } from "react-use";

export default function SingleToDo({ todo }) {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.name || "");
  const ref = useRef(null);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const handleDone = () => {
    setTodo(todo.id);
  };

  const toggleEditMode = () => {
    setEditMode((curr) => !curr);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, editText);
    toggleEditMode();
  };

  useClickAway(ref, () => {
    if (editMode) {
      toggleEditMode();
    }
  });

  useKeyPressEvent("Escape", () => {
    if (editMode) {
      toggleEditMode();
    }
  });

  return (
    <>
      {editMode && (
        <div className="fixed inset-0 z-10 bg-darkBgColor/70 flex items-center justify-center">
          <form
            ref={ref}
            className="p-10 rounded-lg bg-darkBgColor border-2 border-hoverColor flex flex-wrap gap-y-5"
            onSubmit={handleEditSubmit}
          >
            <p className="text-selectColor text-lg leading-3 tracking-widest font-bold w-full">
              UPDATE TASK
            </p>
            <input
              className="flex-1 w-[200px] md:w-[360px] h-[60px] text-white text-2xl bg-[#080c0b] p-4 mr-5 focus:border focus:border-[#379f88] outline-none focus:ring-4 focus:ring-[#379f88] placeholder: rounded-lg transition duration-150"
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="h-[60px] w-[60px] text-black flex items-center justify-center bg-accent p-2 outline-none transition duration-150 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                height="24"
                width="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
          </form>
        </div>
      )}
      <li className="flex items-center justify-between mt-8 p-5 border-4 border-[#0b100f] rounded-lg w-full h-[103px] gap-10">
        <div className="group flex items-center gap-2 h-full overflow-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-accent/10 scrollbar-track-rounded scrollbar-thumb-rounded p-1">
          <div className="flex items-center relative">
            <input
              className="shrink-0 shadow-accent relative h-[28.8px] w-[28.8px] rounded-[3.2px] checked:bg-accent bg-muted border border-accent appearance-none outline-none cursor-pointer group-hover:ring-4 group-hover:ring-accent/30 transition-all"
              type="checkbox"
              checked={todo.do}
              onClick={() => handleDone()}
              readOnly
            />
            {todo.do && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="24"
                height="24"
                className="top-0.5 left-0.5 absolute pointer-events-none text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            )}
          </div>
          <div className="flex items-center w-full h-full">
            <p
              className={classNames(
                "text-[28.8px] leading-[29.12px] font-normal cursor-pointer",
                {
                  "line-through": todo.do,
                },
              )}
              onClick={() => handleDone()}
            >
              {todo.name}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-full gap-2">
          <button
            type="button"
            className="h-[60px] w-[60px] flex items-center justify-center bg-accent p-2 outline-none transition duration-150 rounded-lg"
            onClick={() => toggleEditMode()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <button
            id="remove"
            type="button"
            className="h-[60px] w-[60px] flex items-center justify-center bg-accentRemove p-2 outline-none transition duration-150 rounded-lg"
            onClick={() => handleRemove()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </li>
    </>
  );
}
