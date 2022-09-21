import { SyntheticEvent, useCallback, useMemo, useState } from "react";

import { useJobSlice } from "../../../common/hooks/useJobSlice/useJobSlice";
import { useJobListContext } from "./useJobListContext";

import { Job } from "../../../common/types/job";
import { useUiSlice } from "../../../common/hooks/useUiSlice/useUiSlice";

export const useJobList = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const { jobs, deleteManyJobs } = useJobSlice();
  const { showDeleteWarning, openSidePanel } = useUiSlice();
  const { selectedJobs, cancelSelection } = useJobListContext();

  const handleTabChange = (e: SyntheticEvent) => {
    setSelectedTab((e.target as HTMLButtonElement).textContent!);
  };

  const handleDeleteMany = async () => {
    await deleteManyJobs(selectedJobs);
  };

  const renderJobs = useCallback(() => {
    if (selectedTab === "All") return jobs;

    return jobs!
      .filter((job) => job.status === selectedTab)
      .sort((a, b) => +a.date - +b.date);
  }, [jobs, selectedTab]);

  let jobsToDisplay: Job[] = useMemo(() => renderJobs(), [renderJobs]);
  console.log(jobsToDisplay);

  return {
    jobsToDisplay,
    selectedTab,
    handleTabChange,
    selectedJobs,
    cancelSelection,
    showDeleteWarning,
    handleDeleteMany,
    openSidePanel,
  };
};
