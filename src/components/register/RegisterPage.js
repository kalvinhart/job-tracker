import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

import AuthForm from "../shared/AuthForm/AuthForm";

const LoginPage = () => {
  const { signUp } = useContext(AuthContext);

  return <AuthForm type="REGISTER" signUp={signUp} />;
};

export default LoginPage;
