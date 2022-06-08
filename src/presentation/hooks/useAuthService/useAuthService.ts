import FirebaseAuthService from "../../../infrastructure/api/FirebaseAuthService/FirebaseAuthService";
import AuthService from "../../../infrastructure/services/AuthService/AuthService";

export const useAuthService = () => {
  const api = new FirebaseAuthService();
  return new AuthService(api);
};
