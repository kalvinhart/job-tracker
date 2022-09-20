import { render } from "@testing-library/react";
import { AuthContext } from "../../context/authContext";

const authContextValues = {
  userID: "test",
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
  resetPassword: () => {},
};

const AuthWrapper = ({ children }) => {
  return (
    <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>
  );
};

const customContextRender = (ui, options) =>
  render(ui, { wrapper: AuthWrapper, ...options });

export * from "@testing-library/react";

export { customContextRender as render };
