import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../services/authService";

const ProtectedRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="login" replace />;
};

export default ProtectedRoute;
