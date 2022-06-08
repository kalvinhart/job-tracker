import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthentication } from "../../../hooks/useAuthentication/useAuthentication";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useAuthentication();

  const navigate = useNavigate();

  const handleChange = (e: React.SyntheticEvent) => {
    if (error) {
      setError("");
    }
    setEmail((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!email) {
      setError("You must enter an email address.");
      return;
    }

    resetPassword!(email);
    navigate("/signin");
  };

  return {
    email,
    error,
    handleChange: (e: React.SyntheticEvent) => handleChange(e),
    handleSubmit: (e: React.SyntheticEvent) => handleSubmit(e),
  };
};
