import { Input, InputGroup, Label } from "../../../common/styles/formStyles";
import {
  StyledBackgroundDiv,
  StyledForm,
} from "../../../common/components/AuthForm/AuthForm.styled";
import { SpanError, H2 } from "../../../common/styles/fontStyles";
import { Button } from "../../../common/styles/buttonStyles";
import { useForgotPassword } from "../hooks/useForgotPassword";

const ForgotPassword = () => {
  const { email, error, handleChange, handleSubmit } = useForgotPassword();

  return (
    <StyledBackgroundDiv>
      <StyledForm onSubmit={handleSubmit} aria-label="Reset your Password">
        <H2>Reset your Password</H2>
        <InputGroup>
          <Label htmlFor="email">Email Address:</Label>
          <Input long type="email" id="email" value={email} onChange={handleChange} />
        </InputGroup>
        {error && <SpanError inline>{error}</SpanError>}
        <Button variant="primary" type="submit">
          Reset
        </Button>
      </StyledForm>
    </StyledBackgroundDiv>
  );
};

export default ForgotPassword;
