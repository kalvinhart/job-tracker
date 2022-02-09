import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

import AuthForm from "../shared/AuthForm/AuthForm";

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);

  return <AuthForm type="LOGIN" signIn={signIn} />;
};

export default LoginPage;
