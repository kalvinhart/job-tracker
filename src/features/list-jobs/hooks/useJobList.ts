import { SyntheticEvent, useState } from "react";

import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";
import { useJobListContext } from "./useJobListContext";

import { Job } from "../../../common/types/job";
import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";

export const useJobList = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const { jobs, deleteManyJobs } = useJobSlice();
  const { showDeleteWarning, setShowDeleteWarning } = useUiSlice();
  const {
    selectedJobs,
    cancelSelection,
    showJobForm,
    handleOpenJobForm,
    handleCloseJobForm,
  } = useJobListContext();

  const handleTabChange = (e: SyntheticEvent) => {
    setSelectedTab((e.target as HTMLButtonElement).textContent!);
  };

  const handleDeleteMany = async () => {
    await deleteManyJobs(selectedJobs);
  };

  const jobsToDisplay: Job[] =
    selectedTab === "All" ? jobs : jobs.filter((job) => job.status === selectedTab);

  return {
    jobsToDisplay,
    selectedTab,
    handleTabChange,
    selectedJobs,
    cancelSelection,
    showDeleteWarning,
    setShowDeleteWarning,
    handleDeleteMany,
    showJobForm,
    handleOpenJobForm,
    handleCloseJobForm,
  };
};
