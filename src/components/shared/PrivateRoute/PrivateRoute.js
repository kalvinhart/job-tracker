import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    }
    setLoading(false);
  });

  if (loading) return <Spinner />;

  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
