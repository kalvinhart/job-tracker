import { useAuthActions } from "../../hooks/useAuthActions/useAuthActions";

import AuthForm from "../../shared/AuthForm/AuthForm";

const LoginPage = () => {
  const { signIn } = useAuthActions();

  return <AuthForm type="LOGIN" signIn={signIn} />;
};

export default LoginPage;
