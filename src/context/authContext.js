import { createContext, useState, useEffect } from "react";
import {
  createNewUserWithEmail,
  signInWithEmail,
  authStateChange,
  signUserOut,
} from "../utilities/firebaseAuth";
import { toast } from "react-hot-toast";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = authStateChange(updateUser);
    return unsubscribe;
  }, []);

  const signUp = async (email, password) => {
    try {
      const newUser = await createNewUserWithEmail(email, password);
      toast.success("Account created successfully!");
      return { user: newUser, error: null };
    } catch ({ message }) {
      console.log(message);

      if (message.includes("auth/email-already-exists")) {
        return { user: null, error: "A user with the email address already exists." };
      } else {
        toast.error("Something went wrong, please try again.");
        return { user: null, error: "An unknown error has occurred. Please try again." };
      }
    }
  };

  const signIn = async (email, password) => {
    try {
      const user = await signInWithEmail(email, password);
      toast.success("Signed in successfully!");
      return { user, error: null };
    } catch ({ message }) {
      console.log(message);

      if (
        message.includes("auth/user-not-found") ||
        message.includes("auth/wrong-password")
      ) {
        return { user: null, error: "Invalid username/password" };
      } else {
        toast.error("Something went wrong, please try again.");
        return { user: null, error: "An unknown error has occurred. Please try again." };
      }
    }
  };

  const signOut = () => {
    signUserOut();
  };

  const updateUser = (userID) => {
    setUserDetails(userID);
  };

  return (
    <AuthContext.Provider value={{ userDetails, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;