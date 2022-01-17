import { createContext, useState, useEffect, useRef, useCallback } from "react";
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
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);

  const loadedRef = useRef(false);

  const fetchJobs = useCallback(async () => {
    try {
      let originalJobs = [];

      const jobsRef = collection(db, "jobs");
      const querySnapshot = await getDocs(jobsRef);
      querySnapshot.forEach((doc) => {
        const newData = { id: doc.id, ...doc.data() };
        originalJobs.push(newData);
        console.log(doc.id, " => ", doc.data());
      });

      setJobs(originalJobs);
      const newJobs = filterJobs(originalJobs);
      setFilteredJobs(newJobs);
      loadedRef.current = true;
    } catch (e) {
      console.log(e.message);
    }
  });

  const filterJobs = (jobs) => {
    return jobs.map((job) => {
      return {
        ...job,
        date: new Date(job.date.seconds).toDateString(),
        salary: job.salary.toString(),
      };
    });
  };

  useEffect(() => {
    if (loadedRef.current) return;
    fetchJobs();
  }, [fetchJobs]);

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
