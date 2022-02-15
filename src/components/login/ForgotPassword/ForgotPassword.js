import { useContext, useState } from "react/cjs/react.development";
import { AuthContext } from "../../../context/authContext";

import { StyledInput, StyledInputGroup, StyledLabel } from "../../../styles/formStyles";
import { StyledBackgroundDiv, StyledForm } from "../../shared/AuthForm/AuthForm.styled";
import { H2 } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    resetPassword(email);
    navigate("/signin");
  };

  return (
    <StyledBackgroundDiv>
      <StyledForm onSubmit={handleSubmit}>
        <H2>Reset your Password</H2>
        <StyledInputGroup>
          <StyledLabel htmlFor="email">Email Address:</StyledLabel>
          <StyledInput
            long
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledInputGroup>
        <Button primary type="submit">
          Reset
        </Button>
      </StyledForm>
    </StyledBackgroundDiv>
  );
};

export default ForgotPassword;
