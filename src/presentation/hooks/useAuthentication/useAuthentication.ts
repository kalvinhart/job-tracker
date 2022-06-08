import { useContext } from "react";
import { AuthContext } from "../../../application/context/authContext";

export const useAuthentication = () => {
  const {
    userID: user,
    isLoggedIn,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
  } = useContext(AuthContext);

  return {
    user,
    isLoggedIn,
    loading,
    signIn,
    signOut,
    signUp,
    resetPassword,
  };
};
