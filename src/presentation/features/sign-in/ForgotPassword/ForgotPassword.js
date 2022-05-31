import { StyledInput, StyledInputGroup, StyledLabel } from "../../../styles/formStyles";
import {
  StyledBackgroundDiv,
  StyledForm,
} from "../../../shared/AuthForm/AuthForm.styled";
import { ErrorSpan, H2 } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";
import { useForgotPassword } from "../../../hooks/useForgotPassword/useForgotPassword";

const ForgotPassword = () => {
  const { email, error, handleChange, handleSubmit } = useForgotPassword();

  return (
    <StyledBackgroundDiv>
      <StyledForm onSubmit={handleSubmit} aria-label="Reset your Password">
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
        {error && <ErrorSpan inline>{error}</ErrorSpan>}
        <Button primary type="submit">
          Reset
        </Button>
      </StyledForm>
    </StyledBackgroundDiv>
  );
};

export default ForgotPassword;
