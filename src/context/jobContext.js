import { createContext, useState } from "react";

export const JobContext = createContext({
  show: false,
  setShow: () => {},
  editing: false,
  setEditing: () => {},
});

const JobProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);

  const enableEditing = () => {
    setEditing(true);
    setShow(true);
  };
  return (
    <JobContext.Provider value={{ show, setShow, editing, enableEditing }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
