import store from "store";
import { _setTheme, _toggleTheme } from "store/theme";

export const setTheme = (data) => store.dispatch(_setTheme(data));
export const toggleTheme = () => store.dispatch(_toggleTheme());
