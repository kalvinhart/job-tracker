import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useJobSlice } from "../../common/hooks/useJobSlice/useJobSlice";
import { useUiSlice } from "../../common/hooks/useUiSlice/useUiSlice";

export const useForm = () => {
  const { editing, closeSidePanel } = useUiSlice();
  const { loading, currentJob, saveEditedJob, saveNewJob } = useJobSlice();
  const { userID } = useContext(AuthContext);

  return {
    loading,
    currentJob,
    saveEditedJob,
    saveNewJob,
    editing,
    closeSidePanel,
    userID,
  };
};
