import { createContext, useState, useEffect, ReactNode } from "react";
import { IAuthService } from "../services/interfaces/IAuthService";
import { useAuthService } from "../common/hooks/useAuthService/useAuthService";
import { toastSuccess, toastError } from "../common/utilities/toast";

type Auth = {
  user: string | null;
  error: string | null;
};

export interface IAuthContext {
  userID: string | null;
  isLoggedIn: boolean;
  loading: boolean;

  signUp: (email: string, password: string) => Promise<Auth>;
  signIn: (email: string, password: string) => Promise<Auth>;
  signOut: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const initalState = {
  userID: null,
  isLoggedIn: false,
  loading: false,
};

export const AuthContext = createContext<Partial<IAuthContext>>(initalState);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userID, setUserID] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const authService: IAuthService = useAuthService();

  useEffect(() => {
    const unsubscribe = authService.authStateChange(updateUser);
    return unsubscribe;
  }, [authService]);

  const signUp = async (email: string, password: string): Promise<Auth> => {
    try {
      const newUser = await authService.registerUser({
        email,
        password,
      });
      toastSuccess("Account created successfully!");
      return { user: newUser, error: null };
    } catch (error: any) {
      if (error.message.includes("auth/email-already-in-use")) {
        return { user: null, error: "A user with the email address already exists." };
      } else {
        toastError("Something went wrong, please try again.");
        return { user: null, error: "An unknown error has occurred. Please try again." };
      }
    }
  };

  const signIn = async (email: string, password: string): Promise<Auth> => {
    try {
      const user = await authService.signIn({ email, password });
      toastSuccess("Signed in successfully!");
      return { user, error: null };
    } catch (error: any) {
      if (
        error.message.includes("auth/user-not-found") ||
        error.message.includes("auth/wrong-password")
      ) {
        return { user: null, error: "Invalid username/password" };
      } else {
        toastError("Something went wrong, please try again.");
        return { user: null, error: "An unknown error has occurred. Please try again." };
      }
    }
  };

  const signOut = () => {
    authService.signOut();
  };

  const updateUser = (newUserID: string | null): void => {
    setUserID(newUserID);

    if (newUserID !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setLoading(false);
  };

  const resetPassword = async (email: string): Promise<void> => {
    try {
      await authService.sendResetEmail(email);
      toastSuccess("Please check your emails.");
    } catch ({ message }) {
      toastError("An error has occurred, please try again.");
    }
  };

  return (
    <AuthContext.Provider
      value={{ userID, isLoggedIn, loading, signUp, signIn, signOut, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
