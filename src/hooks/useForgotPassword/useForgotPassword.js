import { useState } from "react";
import { useAuthActions } from "../shared/useAuthActions/useAuthActions";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuthActions();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    resetPassword(email);
  };

  return {
    email,
    handleChange: (e) => handleChange(e),
    handleSubmit: (e) => handleSubmit(e),
  };
};
