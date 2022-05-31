import { useAuthActions } from "../../hooks/useAuthActions/useAuthActions";

import AuthForm from "../../shared/AuthForm/AuthForm";

const LoginPage = () => {
  const { signUp } = useAuthActions();

  return <AuthForm type="REGISTER" signUp={signUp} />;
};

export default LoginPage;
