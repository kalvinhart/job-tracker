import { SyntheticEvent, useState } from "react";

import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";
import { useJobListContext } from "./useJobListContext";

import { Job } from "../../../common/types/job";
import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";

export const useJobList = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const { jobs, deleteManyJobs } = useJobSlice();
  const { showDeleteWarning } = useUiSlice();
  const { selectedJobs, cancelSelection } = useJobListContext();

  const handleTabChange = (e: SyntheticEvent) => {
    setSelectedTab((e.target as HTMLButtonElement).textContent!);
  };

  const handleDeleteMany = async () => {
    await deleteManyJobs(selectedJobs);
  };

  let jobsToDisplay: Job[] =
    selectedTab === "All" ? jobs! : jobs!.filter((job) => job.status === selectedTab);

  return {
    jobsToDisplay,
    selectedTab,
    handleTabChange,
    selectedJobs,
    cancelSelection,
    showDeleteWarning,
    handleDeleteMany,
  };
};
