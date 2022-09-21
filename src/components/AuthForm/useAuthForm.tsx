import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/authContext";
import { UserCredentials } from "../../common/types/auth";

export const useAuthForm = (type: string) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { signIn, signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitForm = async (data: UserCredentials): Promise<void> => {
    setLoading(true);

    if (type === "LOGIN") {
      const { error } = await signIn!(data.email, data.password);
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

      const { error } = await signUp!(data.email, data.password);
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
    submitForm: (data: UserCredentials) => submitForm(data),
  };
};
