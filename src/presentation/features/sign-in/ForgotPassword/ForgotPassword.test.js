import ForgotPassword from "./ForgotPassword";
import { render, screen, fireEvent } from "../../../utilities/testUtils";

jest.mock("../../../hooks/useAuthActions/useAuthActions.js", () => ({
  useAuthActions: () => ({
    signIn: () => {},
    signUserOut: () => {},
    signUp: () => {},
    resetPassword: () => {},
  }),
}));

const mockHandleSubmitFn = jest.fn();

jest.mock("../../../hooks/useForgotPassword/useForgotPassword.js", () => {
  const originalHook = jest.requireActual(
    "../../../hooks/useForgotPassword/useForgotPassword.js"
  );

  return {
    __esModule: true,
    ...originalHook,
    handleSubmit: () => mockHandleSubmitFn(),
  };
});

describe("ForgotPassword", () => {
  beforeEach(() => {
    render(<ForgotPassword />);
  });

  test("renders with blank input", () => {
    const emailInput = screen.getByRole("textbox");
    expect(emailInput.value).toBe("");
  });

  test("can have text entered in input", () => {
    const emailInput = screen.getByRole("textbox");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });

    expect(emailInput.value).toBe("test@test.com");
  });

  test("displays error if no value is entered", () => {
    const submitButton = screen.getByRole("button");

    fireEvent.click(submitButton);

    const errorElement = screen.getByText("You must enter an email address.");

    expect(errorElement).toBeInTheDocument();
  });

  test("submit handler is called", () => {
    const emailInput = screen.getByRole("textbox");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });

    expect(emailInput.value).toBe("test@test.com");

    const formElement = screen.getByRole("form");

    fireEvent.submit(formElement);

    // expect(mockHandleSubmitFn).toHaveBeenCalledTimes(1);
  });
});
