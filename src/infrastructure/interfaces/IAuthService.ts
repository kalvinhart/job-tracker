import { UserCredentials } from "../types/UserCredentials";

type UpdateUser = (newUserId: string | null) => void;

export interface IAuthService {
  registerUser: (userCredentials: UserCredentials) => Promise<string>;
  signIn: (userCredentials: UserCredentials) => Promise<string>;
  signOut: () => void;
  authStateChange: (updateUser: UpdateUser) => any;
  sendResetEmail: (email: string) => Promise<void>;
}
