import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { StyledBackgroundDiv, StyledForm } from "./AuthForm.styled";
import { StyledInput, StyledInputGroup, StyledLabel } from "../../../styles/formStyles";
import { Button } from "../../../styles/buttonStyles";
import { H2, StyledParagraph, ErrorSpan } from "../../../styles/fontStyles";
import { Link } from "react-router-dom";

const AuthForm = ({ type }) => {
  const { signUp, signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setLoading(true);

    if (type === "LOGIN") {
      const { user, error } = await signIn(data.email, data.password);
      setLoading(false);
      setErrorMessage(null);
      if (error) {
        setErrorMessage(error);
      }
    }

    if (type === "REGISTER") {
      if (data.password !== data.confirmPassword) {
        setErrorMessage("Passwords do not match.");
      }

      await signUp(data.email, data.password);
      setLoading(false);
      setErrorMessage(null);
    }
  };

  return (
    <StyledBackgroundDiv>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <H2>Sign In</H2>

        <StyledInputGroup>
          <StyledLabel htmlFor="email">Email Address:</StyledLabel>
          <StyledInput
            long
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Email address is
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
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password?.type === "required" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Password is
              required.
            </ErrorSpan>
          )}
          {errors.password?.type === "minLength" && (
            <ErrorSpan>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Password must be at
              least 6 characters.
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
              {...register("confirmPassword", { required: true, minLength: 6 })}
            />
            {errors.confirmPassword?.type === "required" && (
              <ErrorSpan>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Confirm password
                is required.
              </ErrorSpan>
            )}
          </StyledInputGroup>
        )}

        {errorMessage && <ErrorSpan inline>{errorMessage}</ErrorSpan>}

        <Button primary type="submit">
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} size="lg" spin />
          ) : type === "LOGIN" ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
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
