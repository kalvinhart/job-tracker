// import { UpdateUser } from "../types/UpdateUser";
import { UserResponse } from "../types/Response";
import { UserCredentials } from "../types/UserCredentials";
export interface IAuthService {
  registerUser: (userCredentials: UserCredentials) => Promise<UserResponse>;
  signIn: (userCredentials: UserCredentials) => Promise<UserResponse>;
  signOut: () => void;
  // authStateChange: (updateUser: UpdateUser) => any;
  // sendResetEmail: (email: string) => Promise<void>;
}
