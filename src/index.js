import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "routes";
import store from "store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
);
