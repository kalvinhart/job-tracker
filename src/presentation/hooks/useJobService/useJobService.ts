import JobService from "../../../infrastructure/services/JobService/JobService";
import { useApi } from "../useApi/useApi";

export const useJobService = () => {
  const api = useApi();
  return new JobService(api);
};
