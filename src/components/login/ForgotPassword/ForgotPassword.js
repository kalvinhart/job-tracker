import { StyledInput, StyledInputGroup, StyledLabel } from "../../../styles/formStyles";
import { StyledBackgroundDiv, StyledForm } from "../../shared/AuthForm/AuthForm.styled";
import { H2 } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import { useForgotPassword } from "../../../hooks/useForgotPassword/useForgotPassword";

const ForgotPassword = () => {
  const { email, handleChange, handleSubmit } = useForgotPassword();

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
            onChange={handleChange}
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
