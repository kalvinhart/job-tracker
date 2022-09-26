import ForgotPassword from "./ForgotPassword";
import { authRender, screen, fireEvent } from "../../../common/utilities/tests/testUtils";

const mockHandleSubmitFn = jest.fn();

jest.mock("../hooks/useForgotPassword.ts", () => {
  const originalHook = jest.requireActual("../hooks/useForgotPassword.ts");

  return {
    __esModule: true,
    ...originalHook,
    handleSubmit: () => mockHandleSubmitFn(),
  };
});

describe("ForgotPassword", () => {
  test("renders with blank input", () => {
    authRender(<ForgotPassword />);

    const emailInput = screen.getByRole("textbox");
    expect((emailInput as HTMLInputElement).value).toBe("");
  });

  test("can have text entered in input", () => {
    authRender(<ForgotPassword />);

    const emailInput = screen.getByRole("textbox");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });

    expect((emailInput as HTMLInputElement).value).toBe("test@test.com");
  });

  test("displays error if no value is entered", () => {
    authRender(<ForgotPassword />);

    const submitButton = screen.getByRole("button");

    fireEvent.click(submitButton);

    const errorElement = screen.getByText("You must enter an email address.");

    expect(errorElement).toBeInTheDocument();
  });
});
