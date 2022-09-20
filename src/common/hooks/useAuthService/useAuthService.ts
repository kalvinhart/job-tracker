import FirebaseAuthService from "../../../services/api/FirebaseAuthService/FirebaseAuthService";
import AuthService from "../../../services/AuthService/AuthService";

export const useAuthService = () => {
  const api = new FirebaseAuthService();
  return new AuthService(api);
};
