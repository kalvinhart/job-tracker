import { useContext } from "react";
import { AuthContext } from "../../../application/context/authContext";
import { useTableConfig } from "../../features/list-jobs/hooks/useTableConfig";
import { useJobSlice } from "../../hooks/useJobSlice/useJobSlice";
import { useUiSlice } from "../../hooks/useUiSlice/useUiSlice";

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
