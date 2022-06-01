import FirebaseService from "../../../infrastructure/api/FirebaseService/FirebaseService";

export const useApi = () => {
  return new FirebaseService();
};
