import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";
import LayOut from "../components/LayOut";
import ProtectedRoute from "../guards/ProtectedRoute";
import GuestRoute from "../guards/GuestRoute";

const router = createBrowserRouter([
  {
    element: <GuestRoute />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <LayOut />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "users/:userId",
            element: <Details />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
