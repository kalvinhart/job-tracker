import FirebaseService from "../../../infrastructure/api/FirebaseService/FirebaseService";
import JobService from "../../../infrastructure/services/JobService/JobService";

export const useJobService = () => {
  const api = new FirebaseService();
  return new JobService(api);
};
