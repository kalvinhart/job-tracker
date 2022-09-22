import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";
import { useAuthentication } from "../../../common/hooks/useAuthentication/useAuthentication";

export const useForm = () => {
  const { loading, currentJob, saveEditedJob, saveNewJob } = useJobSlice();
  const { user } = useAuthentication();

  return {
    loading,
    currentJob,
    saveEditedJob,
    saveNewJob,
    user,
  };
};
