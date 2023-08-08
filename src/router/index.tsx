import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default router;
