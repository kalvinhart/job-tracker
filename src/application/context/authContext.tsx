import { createContext, ReactNode, useEffect } from "react";
import { useAuthService } from "../../presentation/hooks/useAuthService/useAuthService";
import { IAuthContext } from "./types/IAuthContext";

const initialState: Partial<IAuthContext> = {
  userID: null,
  token: null,
  isLoggedIn: false,
  loading: true,
};

const AuthContext = createContext<Partial<IAuthContext>>(initialState);

type Props = {
  children: ReactNode;
};
const AuthProvider = ({ children }: Props) => {
  const authService = useAuthService();

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token") ?? "");

    if (storedToken !== "") {
      authService.signIn(storedToken);
    }
  }, []);

  return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
