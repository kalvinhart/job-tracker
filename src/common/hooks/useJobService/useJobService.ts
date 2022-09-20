import FirebaseService from "../../../services/api/FirebaseService/FirebaseService";
import JobService from "../../../services/JobService/JobService";

export const useJobService = () => {
  const api = new FirebaseService();
  return new JobService(api);
};
