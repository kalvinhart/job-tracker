import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/authContext";
import { useJobSlice } from "../../common/hooks/useJobSlice/useJobSlice";

export const useHeader = () => {
  const { userID, signOut } = useContext(AuthContext);
  const { clearJobState } = useJobSlice();
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut!();
    clearJobState();
    navigate("/signin");
  };

  return {
    userID,
    signOut: () => signUserOut!(),
  };
};
