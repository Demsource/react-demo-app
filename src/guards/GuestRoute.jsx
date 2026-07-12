import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../services/authService";

const GuestRoute = () => {
  return isLoggedIn() ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoute;
