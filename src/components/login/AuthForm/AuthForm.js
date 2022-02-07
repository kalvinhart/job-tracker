import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import { StyledBackgroundDiv, StyledForm } from "./AuthForm.styled";
import { StyledInput, StyledInputGroup, StyledLabel } from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";
import { H2, StyledParagraph, ErrorSpan } from "../../../styles/fontStyles";
import { Link } from "react-router-dom";

const AuthForm = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <StyledBackgroundDiv>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <H2>Sign In</H2>

        <StyledInputGroup>
          <StyledLabel htmlFor="username">Username:</StyledLabel>
          <StyledInput
            long
            type="text"
            id="username"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Username is
              required.
            </ErrorSpan>
          )}
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput
            long
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Password is
              required.
            </ErrorSpan>
          )}
        </StyledInputGroup>

        {type === "REGISTER" && (
          <StyledInputGroup>
            <StyledLabel htmlFor="confirmPassword">Confirm Password:</StyledLabel>
            <StyledInput
              long
              type="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword?.type === "required" && (
              <ErrorSpan>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Confirm password
                is required.
              </ErrorSpan>
            )}
          </StyledInputGroup>
        )}

        <Button primary type="submit">
          {type === "LOGIN" ? "Sign In" : "Sign Up"}
        </Button>

        {type === "LOGIN" && (
          <StyledParagraph>
            <Button transparent>Forgot your password?</Button>
          </StyledParagraph>
        )}
      </StyledForm>

      {type === "LOGIN" && (
        <StyledParagraph>
          Not registered? <Link to="/register">Sign up here!</Link>
        </StyledParagraph>
      )}
    </StyledBackgroundDiv>
  );
};

export default AuthForm;
