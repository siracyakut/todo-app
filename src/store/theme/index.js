import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    _setTheme: (state, action) => {
      state.theme = action.payload;
    },
    _toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { _setTheme, _toggleTheme } = theme.actions;
export default theme.reducer;
