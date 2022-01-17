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

  const cancel = () => {
    setShow(false);
    setEditing(false);
  };

  return (
    <JobContext.Provider value={{ show, setShow, editing, enableEditing, cancel }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
