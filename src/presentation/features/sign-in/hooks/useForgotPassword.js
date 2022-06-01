import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../../application/context/authContext";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();

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
    navigate("/signin");
  };

  return {
    email,
    error,
    handleChange: (e) => handleChange(e),
    handleSubmit: (e) => handleSubmit(e),
  };
};
