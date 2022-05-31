import { useState } from "react";
import { useAuthActions } from "../../../hooks/useAuthActions/useAuthActions";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useAuthActions();

  const handleChange = (e) => {
    if (error) {
      setError("");
    }
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("You must enter an email address.");
      return;
    }

    resetPassword(email);
  };

  return {
    email,
    error,
    handleChange: (e) => handleChange(e),
    handleSubmit: (e) => handleSubmit(e),
  };
};
