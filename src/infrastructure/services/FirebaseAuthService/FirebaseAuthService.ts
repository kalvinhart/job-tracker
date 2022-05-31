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

export default class FirebaseAuthService {
  async registerUser(userCredentials: UserCredentials): Promise<string> {
    const { email, password } = userCredentials;
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user.uid;
  }

  async signIn(userCredentials: UserCredentials): Promise<string> {
    const { email, password } = userCredentials;
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user.uid;
  }

  authStateChange(updateUser: (newUserID: string | null) => void) {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        updateUser(user.uid);
      } else {
        updateUser(null);
      }
    });
    return unsubscribe;
  }

  signOut(): void {
    const auth = getAuth();
    auth.signOut();
  }

  async sendResetEmail(email: string): Promise<void> {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
  }
}
