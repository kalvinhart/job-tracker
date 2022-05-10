import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthActions } from "../useAuthActions/useAuthActions";

export const useAuthForm = (type) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { signIn, signUp } = useAuthActions();

  const navigate = useNavigate();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setLoading(true);

    if (type === "LOGIN") {
      const { error } = await signIn(data.email, data.password);
      setLoading(false);

      if (error) {
        setErrorMessage(error);
      } else {
        setErrorMessage(null);
        navigate("/");
      }
    }

    if (type === "REGISTER") {
      if (data.password !== data.confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      const { error } = await signUp(data.email, data.password);
      setLoading(false);

      if (error) {
        setErrorMessage(error);
      } else {
        setErrorMessage(null);
        navigate("/");
      }
    }
  };

  return {
    loading,
    errorMessage,
    onSubmit: (data, e) => onSubmit(data, e),
  };
};
