import { createContext, useState, useEffect } from "react";
import FirebaseAuthService from "../../infrastructure/api/FirebaseAuthService/FirebaseAuthService";
import { toastSuccess, toastError } from "../../presentation/utilities/toast";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const firebaseAuthService = new FirebaseAuthService();

  useEffect(() => {
    const unsubscribe = firebaseAuthService.authStateChange(updateUser);
    return unsubscribe;
  }, []);

  const signUp = async (email, password) => {
    try {
      const newUser = await firebaseAuthService.registerUser({
        email,
        password,
      });
      toastSuccess("Account created successfully!");
      return { user: newUser, error: null };
    } catch ({ message }) {
      if (message.includes("auth/email-already-in-use")) {
        return { user: null, error: "A user with the email address already exists." };
      } else {
        toastError("Something went wrong, please try again.");
        return { user: null, error: "An unknown error has occurred. Please try again." };
      }
    }
  };

  const signIn = async (email, password) => {
    try {
      const user = await firebaseAuthService.signIn({ email, password });
      toastSuccess("Signed in successfully!");
      return { user, error: null };
    } catch ({ message }) {
      if (
        message.includes("auth/user-not-found") ||
        message.includes("auth/wrong-password")
      ) {
        return { user: null, error: "Invalid username/password" };
      } else {
        toastError("Something went wrong, please try again.");
        return { user: null, error: "An unknown error has occurred. Please try again." };
      }
    }
  };

  const signOut = () => {
    firebaseAuthService.signOut();
  };

  const updateUser = (newUserID) => {
    setUserID(newUserID);
  };

  const resetPassword = async (email) => {
    try {
      await firebaseAuthService.sendResetEmail(email);
      toastSuccess("Please check your emails.");
    } catch ({ message }) {
      toastError("An error has occurred, please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ userID, signUp, signIn, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
