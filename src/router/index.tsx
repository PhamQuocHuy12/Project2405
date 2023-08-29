import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import RegisterPage from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
