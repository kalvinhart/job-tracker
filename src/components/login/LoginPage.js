import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

import AuthForm from "./AuthForm/AuthForm";

const LoginPage = () => {
  const { signUp, signIn } = useContext(AuthContext);

  return <AuthForm type="LOGIN" signIn={signIn} signUp={signUp} />;
};

export default LoginPage;
