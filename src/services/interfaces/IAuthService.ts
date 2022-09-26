export type UpdateUser = (newUserId: string | null) => void;

export type UserCredentials = {
  email: string;
  password: string;
};

export interface IAuthService {
  registerUser: (userCredentials: UserCredentials) => Promise<string>;
  signIn: (userCredentials: UserCredentials) => Promise<string>;
  signOut: () => void;
  authStateChange: (updateUser: UpdateUser) => any;
  sendResetEmail: (email: string) => Promise<void>;
}
