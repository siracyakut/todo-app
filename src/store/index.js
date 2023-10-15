import { configureStore } from "@reduxjs/toolkit";
import todo from "store/todo";
import theme from "store/theme";

const store = configureStore({
  reducer: {
    todo,
    theme,
  },
});

export default store;
