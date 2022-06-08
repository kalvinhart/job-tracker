import { Navigate, Outlet } from "react-router-dom";

import Spinner from "../Spinner/Spinner";
import { usePrivateRoute } from "./usePrivateRoute";

const PrivateRoute = () => {
  const { isLoggedIn, loading } = usePrivateRoute();

  if (loading) return <Spinner />;

  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
