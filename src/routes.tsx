import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [{ path: "/", element: <Home /> }],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
