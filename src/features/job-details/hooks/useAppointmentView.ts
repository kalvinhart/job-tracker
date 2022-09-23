import { useState } from "react";

import { useJobContext } from "../../../common/hooks/useJobContext/useJobContext";

import { Job } from "../../../common/types/job";

export const useAppointmentView = (job: Job) => {
  const { saveEditedJob } = useJobContext();
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const [showDeleteInterviewWarning, setShowDeleteInterviewWarning] = useState(false);

  const removeInterview = async (): Promise<void> => {
    const newData = {
      ...job,
      interview: "",
      status: "Pending",
    };

    saveEditedJob(job.id!, newData as Job);
  };

  return {
    showAppointmentModal,
    setShowAppointmentModal,
    showDeleteInterviewWarning,
    setShowDeleteInterviewWarning,
    removeInterview,
  };
};
