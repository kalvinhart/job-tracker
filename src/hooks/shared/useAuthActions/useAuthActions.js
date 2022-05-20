import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../context/authContext";

import { useJobSlice } from "../useJobSlice/useJobSlice";

export const useAuthActions = () => {
  const { signUp, signIn, signOut, resetPassword } = useContext(AuthContext);
  const { clearJobState } = useJobSlice();

  const navigate = useNavigate();

  const signUserOut = () => {
    signOut();
    clearJobState();
    navigate("/signin");
  };

  const resetUserPassword = (email) => {
    resetPassword(email);
    navigate("/signin");
  };

  return {
    signIn: (email, password) => signIn(email, password),
    signUserOut: () => signUserOut(),
    signUp: (email, password) => signUp(email, password),
    resetPassword: (email) => resetUserPassword(email),
  };
};
