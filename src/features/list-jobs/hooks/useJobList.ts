import { SyntheticEvent, useMemo, useState } from "react";

import { useJobListContext } from "./useJobListContext";
import { useJobContext } from "../../../common/hooks/useJobContext/useJobContext";

import { Job } from "../../../common/types/job";

export const useJobList = () => {
  const [selectedTab, setSelectedTab] = useState("Pending");
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
    setSelectedTab((e.target as HTMLButtonElement).firstChild!.textContent!);
  };

  const handleDeleteMany = async () => {
    await deleteManyJobs(selectedJobs);
  };

  const jobsToDisplay: Job[] =
    selectedTab === "All" ? jobs : jobs.filter((job) => job.status === selectedTab);

  const jobCount = jobs.length;
  const pendingJobsCount = useMemo(
    () => jobs.filter((job) => job.status === "Pending").length,
    [jobs]
  );
  const interviewJobsCount = useMemo(
    () => jobs.filter((job) => job.status === "Interview").length,
    [jobs]
  );
  const rejectedJobsCount = useMemo(
    () => jobs.filter((job) => job.status === "Rejected").length,
    [jobs]
  );
  const expiredJobsCount = useMemo(
    () => jobs.filter((job) => job.status === "Expired").length,
    [jobs]
  );

  return {
    expiredJobsCount,
    interviewJobsCount,
    jobCount,
    jobsToDisplay,
    selectedTab,
    handleTabChange,
    pendingJobsCount,
    rejectedJobsCount,
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
