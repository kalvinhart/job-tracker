import {
  StyledInput,
  StyledInputGroup,
  StyledLabel,
} from "../../../common/styles/formStyles";
import {
  StyledBackgroundDiv,
  StyledForm,
} from "../../../components/AuthForm/AuthForm.styled";
import { ErrorSpan, H2 } from "../../../common/styles/fontStyles";
import { Button } from "../../../common/styles/buttonStyles";
import { useForgotPassword } from "../hooks/useForgotPassword";

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
