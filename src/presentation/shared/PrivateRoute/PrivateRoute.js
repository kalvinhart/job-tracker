import { useAuth } from "../../hooks/shared/useAuth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

import Spinner from "../Spinner/Spinner";

const PrivateRoute = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return <Spinner />;

  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
