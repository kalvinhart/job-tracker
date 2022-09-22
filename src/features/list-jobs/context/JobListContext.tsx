import { createContext, ReactNode, useState } from "react";

interface IJobListContext {
  selectedJobs: string[];
  showJobForm: boolean;
  handleSelectJob: (id: string) => void;
  handleJobDeselect: (id: string) => void;
  cancelSelection: () => void;
  handleOpenJobForm: () => void;
  handleCloseJobForm: () => void;
}

const initialState: IJobListContext = {
  selectedJobs: [],
  showJobForm: false,
  handleSelectJob: () => {},
  handleJobDeselect: () => {},
  cancelSelection: () => {},
  handleOpenJobForm: () => {},
  handleCloseJobForm: () => {},
};

export const JobListContext = createContext<IJobListContext>(initialState);

type Props = {
  children: ReactNode;
};
const JobListProvider = ({ children }: Props) => {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [showJobForm, setShowJobForm] = useState(false);

  const handleSelectJob = (id: string) => {
    setSelectedJobs((prev) => [...prev, id]);
  };

  const handleJobDeselect = (id: string) => {
    setSelectedJobs((prev) => prev.filter((job) => job !== id));
  };

  const cancelSelection = () => {
    setSelectedJobs([]);
  };

  const handleOpenJobForm = () => {
    setShowJobForm(true);
  };

  const handleCloseJobForm = () => {
    setShowJobForm(false);
  };

  return (
    <JobListContext.Provider
      value={{
        selectedJobs,
        handleSelectJob,
        handleJobDeselect,
        cancelSelection,
        showJobForm,
        handleOpenJobForm,
        handleCloseJobForm,
      }}
    >
      {children}
    </JobListContext.Provider>
  );
};

export default JobListProvider;
