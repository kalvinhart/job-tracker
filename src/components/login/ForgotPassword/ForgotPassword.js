import { useState } from "react/cjs/react.development";
import { useAuthActions } from "../../../hooks/useAuthActions/useAuthActions";

import { StyledInput, StyledInputGroup, StyledLabel } from "../../../styles/formStyles";
import { StyledBackgroundDiv, StyledForm } from "../../shared/AuthForm/AuthForm.styled";
import { H2 } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuthActions();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    resetPassword(email);
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
