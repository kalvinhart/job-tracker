import AuthService from "../../../infrastructure/services/AuthService/AuthService";
import { useAuthApi } from "../useAuthApi/useAuthApi";

export const useAuthService = () => {
  const api = useAuthApi();
  return new AuthService(api);
};
