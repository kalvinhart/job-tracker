import { useContext } from "react";
import { AuthContext } from "../../../application/context/authContext";

export const usePrivateRoute = () => {
  const { isLoggedIn, userID, loading } = useContext(AuthContext);

  return {
    isLoggedIn,
    userID,
    loading,
  };
};
