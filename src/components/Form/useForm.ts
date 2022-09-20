import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useTableConfig } from "../../features/list-jobs/hooks/useTableConfig";
import { useJobSlice } from "../../common/hooks/useJobSlice/useJobSlice";
import { useUiSlice } from "../../common/hooks/useUiSlice/useUiSlice";

export const useForm = () => {
  const { editing, closeSidePanel } = useUiSlice();
  const { loading, currentJob, saveEditedJob, saveNewJob } = useJobSlice();
  const { statusOptions } = useTableConfig();
  const { userID } = useContext(AuthContext);

  return {
    loading,
    currentJob,
    saveEditedJob,
    saveNewJob,
    editing,
    closeSidePanel,
    statusOptions,
    userID,
  };
};
