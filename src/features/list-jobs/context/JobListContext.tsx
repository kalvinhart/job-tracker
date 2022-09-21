import { createContext, ReactNode, useState } from "react";

interface IJobListContext {
  selectedJobs: string[];
  handleSelectJob: (id: string) => void;
  handleJobDeselect: (id: string) => void;
  cancelSelection: () => void;
}

const initialState: IJobListContext = {
  selectedJobs: [],
  handleSelectJob: () => {},
  handleJobDeselect: () => {},
  cancelSelection: () => {},
};

export const JobListContext = createContext<IJobListContext>(initialState);

type Props = {
  children: ReactNode;
};
const JobListProvider = ({ children }: Props) => {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);

  const handleSelectJob = (id: string) => {
    setSelectedJobs((prev) => [...prev, id]);
  };

  const handleJobDeselect = (id: string) => {
    setSelectedJobs((prev) => prev.filter((job) => job !== id));
  };

  const cancelSelection = () => {
    setSelectedJobs([]);
  };

  return (
    <JobListContext.Provider
      value={{ selectedJobs, handleSelectJob, handleJobDeselect, cancelSelection }}
    >
      {children}
    </JobListContext.Provider>
  );
};

export default JobListProvider;
