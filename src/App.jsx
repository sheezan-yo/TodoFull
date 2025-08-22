/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Home, Nav, Signin, Signup, TodoContainer } from "./component/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/todos", element: <TodoContainer /> },
    { path: "/signup", element: <Signup /> },
    { path: "/signin", element: <Signin /> },
  ]);

  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
