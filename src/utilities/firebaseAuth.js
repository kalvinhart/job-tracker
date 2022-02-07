import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const createNewUserWithEmail = async (email, password) => {
  const auth = getAuth();
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signInWithEmail = async (email, password) => {
  const auth = getAuth();
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const authStateChange = (updateUser) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    updateUser(user);
  });
};
