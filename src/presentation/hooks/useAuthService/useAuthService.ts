// import FirebaseAuthService from "../../../infrastructure/api/FirebaseAuthService/FirebaseAuthService";
import AuthAPI from "../../../infrastructure/api/AuthAPI/AuthAPI";
import AuthService from "../../../infrastructure/services/AuthService/AuthService";

export const useAuthService = () => {
  // const api = new FirebaseAuthService();
  const api = new AuthAPI();
  return new AuthService(api);
};
