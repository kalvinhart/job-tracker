import { SyntheticEvent, useState } from "react";

import { useJobListContext } from "./useJobListContext";
import { useJobContext } from "../../../common/hooks/useJobContext/useJobContext";

import { Job } from "../../../common/types/job";

export const useJobList = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);

  const { jobs, deleteManyJobs } = useJobContext();
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
