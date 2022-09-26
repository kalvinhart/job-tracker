import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext, IAuthContext } from "../../context/AuthContext";

const authContextValues: IAuthContext = {
  userID: "test",
  isLoggedIn: true,
  loading: false,
  signUp: async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      resolve({ user: "test", error: null });
    });
  },
  signIn: async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      resolve({ user: "test", error: null });
    });
  },
  signOut: () => {},
  resetPassword: async (email: string) => {},
};

type Props = {
  children: ReactNode;
};
const TestWrapper = ({ children }: Props) => {
  return (
    <MemoryRouter>
      <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>
    </MemoryRouter>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: TestWrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
