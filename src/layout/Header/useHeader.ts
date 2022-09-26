import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useJobContext } from "../../common/hooks/useJobContext/useJobContext";

export const useHeader = () => {
  const { userID, signOut } = useContext(AuthContext);
  const { clearJobState } = useJobContext();
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
