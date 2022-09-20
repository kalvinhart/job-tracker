import { UpdateUser } from "../types/UpdateUser";
import { UserCredentials } from "../types/UserCredentials";
export interface IAuthService {
  registerUser: (userCredentials: UserCredentials) => Promise<string>;
  signIn: (userCredentials: UserCredentials) => Promise<string>;
  signOut: () => void;
  authStateChange: (updateUser: UpdateUser) => any;
  sendResetEmail: (email: string) => Promise<void>;
}
