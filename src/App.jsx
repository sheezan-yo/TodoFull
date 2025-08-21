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

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
