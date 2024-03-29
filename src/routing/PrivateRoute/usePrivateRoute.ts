import { useAuthentication } from "../../common/hooks/useAuthentication/useAuthentication";

export const usePrivateRoute = () => {
  const { isLoggedIn, user, loading } = useAuthentication();

  return {
    isLoggedIn,
    user,
    loading,
  };
};
