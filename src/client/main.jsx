import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Items from "./features/items/Items.jsx";
import Root from "./layout/Root.jsx";
import SingleItem from "./features/items/SingleItem.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainItems from "./features/items/mainItems.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <MainItems /> },
      { path: "/:id", element: <SingleItem /> },
      { path: "/login", element: <AuthForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
