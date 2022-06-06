export type Auth = {
  user: string | null;
  error: string | null;
};

export interface IAuthContext {
  userID: string | null;
  isLoggedIn: boolean;
  loading: boolean;

  signUp: (email: string, password: string) => Promise<Auth>;
  signIn: (email: string, password: string) => Promise<Auth>;
  signOut: () => void;
  resetPassword: (email: string) => Promise<void>;
}
