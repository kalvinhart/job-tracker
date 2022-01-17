import { createContext, useState, useEffect, useRef } from "react";
import { collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";

export const JobContext = createContext({
  show: false,
  setShow: () => {},
  editing: false,
  setEditing: () => {},
});

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);

  const loadedRef = useRef(false);
  console.log(loadedRef);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let data = [];
        const jobsRef = collection(db, "jobs");
        const querySnapshot = await getDocs(jobsRef);
        querySnapshot.forEach((doc) => {
          const newData = { id: doc.id, ...doc.data() };
          data.push(newData);
          console.log(doc.id, " => ", doc.data());
        });
        setJobs(data);
        loadedRef.current = true;
        console.log(loadedRef);
      } catch (e) {
        console.log(e.message);
      }
    };

    if (loadedRef.current) return;
    fetchJobs();
  }, []);

  const enableEditing = () => {
    setEditing(true);
    setShow(true);
  };

  const cancel = () => {
    setShow(false);
    setEditing(false);
  };

  return (
    <JobContext.Provider value={{ jobs, show, setShow, editing, enableEditing, cancel }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
