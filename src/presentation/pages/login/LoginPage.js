import { useAuthActions } from "../../hooks/useAuthActions/useAuthActions";

import AuthForm from "../../components/AuthForm/AuthForm";

const LoginPage = () => {
  const { signIn } = useAuthActions();

  return <AuthForm type="LOGIN" signIn={signIn} />;
};

export default LoginPage;
