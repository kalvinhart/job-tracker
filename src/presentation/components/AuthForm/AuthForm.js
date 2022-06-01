import { useForm } from "react-hook-form";
import { useAuthForm } from "./useAuthForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpinner,
  faArrowCircleRight,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { StyledBackgroundDiv, StyledForm } from "./AuthForm.styled";
import { StyledInput, StyledInputGroup, StyledLabel } from "../../styles/formStyles";
import { Button } from "../../styles/buttonStyles";
import { H2, StyledParagraph, ErrorSpan } from "../../styles/fontStyles";

const AuthForm = ({ type }) => {
  const { loading, errorMessage, onSubmit } = useAuthForm(type);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledBackgroundDiv>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <H2>{type === "LOGIN" ? "Log in to Your Account" : "Register an Account"}</H2>

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
              type="password"
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
            <>
              <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
              {"Sign In"}
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faUserPlus} size="lg" />
              {"Sign Up"}
            </>
          )}
        </Button>

        {type === "LOGIN" && (
          <StyledParagraph>
            <Button as={Link} to="/forgot-password" type="button" transparent="true">
              Forgot your password?
            </Button>
          </StyledParagraph>
        )}
      </StyledForm>

      {type === "LOGIN" ? (
        <StyledParagraph>
          Not registered? <Link to="/register">Sign up here!</Link>
        </StyledParagraph>
      ) : (
        <StyledParagraph>
          Already registered? <Link to="/signin">Sign in here!</Link>
        </StyledParagraph>
      )}
    </StyledBackgroundDiv>
  );
};

export default AuthForm;
