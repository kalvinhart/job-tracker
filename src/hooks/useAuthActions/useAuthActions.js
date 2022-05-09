import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/authContext";

import { clearJobState } from "../../slices/jobSlice";

export const useAuthActions = () => {
  const dispatch = useDispatch();
  const { signUp, signIn, signOut, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  const signUserOut = () => {
    signOut();
    dispatch(clearJobState());
    navigate("/signin");
  };

  return {
    signIn: (email, password) => signIn(email, password),
    signUserOut: () => signUserOut(),
    signUp: (email, password) => signUp(email, password),
    resetPassword: (email) => resetPassword(email),
  };
};
