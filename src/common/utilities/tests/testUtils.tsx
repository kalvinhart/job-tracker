import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext, IAuthContext } from "../../../context/AuthContext";
import JobContextProvider from "../../../context/JobContext";

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
  return <MemoryRouter>{children}</MemoryRouter>;
};

const TestWrapperWithAuth = ({ children }: Props) => {
  return (
    <MemoryRouter>
      <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>
    </MemoryRouter>
  );
};

const TestWrapperWithJobs = ({ children }: Props) => {
  return (
    <MemoryRouter>
      <AuthContext.Provider value={authContextValues}>
        <JobContextProvider>{children}</JobContextProvider>
      </AuthContext.Provider>
    </MemoryRouter>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: TestWrapper, ...options });

const customRenderWithAuth = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: TestWrapperWithAuth, ...options });

const customRenderWithJobs = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: TestWrapperWithJobs, ...options });

export * from "@testing-library/react";

export {
  customRender as render,
  customRenderWithAuth as authRender,
  customRenderWithJobs as jobsRender,
};
