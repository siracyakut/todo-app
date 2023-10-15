import { configureStore } from "@reduxjs/toolkit";
import todo from "store/todo";

const store = configureStore({
  reducer: {
    todo,
  },
});

export default store;
