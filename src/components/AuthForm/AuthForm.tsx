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
import {
  StyledInput,
  StyledInputGroup,
  StyledLabel,
} from "../../common/styles/formStyles";
import { Button } from "../../common/styles/buttonStyles";
import { H2, Paragraph, SpanError, Span } from "../../common/styles/fontStyles";

import { UserCredentials } from "../../common/types/auth";

type FormValues = UserCredentials;

type AuthFormProps = {
  type: string;
};

const AuthForm = ({ type }: AuthFormProps) => {
  const { loading, errorMessage, submitForm } = useAuthForm(type);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => submitForm(data));

  return (
    <StyledBackgroundDiv>
      <StyledForm onSubmit={onSubmit}>
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
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Email address is
              required.
            </SpanError>
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
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Password is
              required.
            </SpanError>
          )}
          {errors.password?.type === "minLength" && (
            <SpanError>
              <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Password must be at
              least 6 characters.
            </SpanError>
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
              <SpanError>
                <FontAwesomeIcon icon={faExclamationCircle} size="xs" /> Confirm password
                is required.
              </SpanError>
            )}
          </StyledInputGroup>
        )}

        {errorMessage && <SpanError inline>{errorMessage}</SpanError>}

        <Button variant="primary" type="submit">
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
          <Paragraph>
            <Link to="/forgot-password" type="button">
              Forgot your password?
            </Link>
          </Paragraph>
        )}

        <Span>Or</Span>
        <Button
          type="button"
          variant="primary"
          onClick={() =>
            submitForm({ email: "newtest@test.com", password: "testing123" })
          }
        >
          <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
          Use the demo account!
        </Button>
      </StyledForm>

      {type === "LOGIN" ? (
        <Paragraph>
          Not registered? <Link to="/register">Sign up here!</Link>
        </Paragraph>
      ) : (
        <Paragraph>
          Already registered? <Link to="/signin">Sign in here!</Link>
        </Paragraph>
      )}
    </StyledBackgroundDiv>
  );
};

export default AuthForm;
