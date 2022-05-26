import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

type UserCredentials = {
  email: string;
  password: string;
};

export const createNewUserWithEmail = async (
  userCredentials: UserCredentials
): Promise<string> => {
  const { email, password } = userCredentials;
  const auth = getAuth();
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user.uid;
};

export const signInWithEmail = async (
  userCredentials: UserCredentials
): Promise<string> => {
  const { email, password } = userCredentials;
  const auth = getAuth();
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user.uid;
};

export const authStateChange = (updateUser: (newUserID: string | null) => void) => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      updateUser(user.uid);
    } else {
      updateUser(null);
    }
  });
  return unsubscribe;
};

export const signUserOut = () => {
  const auth = getAuth();
  auth.signOut();
};

export const sendResetEmail = async (email: string) => {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email);
};
