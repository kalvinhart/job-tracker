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
  const { user: uid } = await createUserWithEmailAndPassword(auth, email, password);
  return uid;
};

export const signInWithEmail = async (email, password) => {
  const auth = getAuth();
  const { user: uid } = await signInWithEmailAndPassword(auth, email, password);
  return uid;
};

export const authStateChange = (updateUser) => {
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
