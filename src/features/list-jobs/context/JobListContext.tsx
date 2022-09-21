import { createContext, ReactNode, useState } from "react";

interface IJobListContext {
  selectedJobs: string[];
  handleSelectJob: (id: string) => void;
  cancelSelection: () => void;
}

const initialState: IJobListContext = {
  selectedJobs: [],
  handleSelectJob: () => {},
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

  const cancelSelection = () => {
    setSelectedJobs([]);
  };

  return (
    <JobListContext.Provider value={{ selectedJobs, handleSelectJob, cancelSelection }}>
      {children}
    </JobListContext.Provider>
  );
};

export default JobListProvider;
