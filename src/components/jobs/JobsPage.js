import { useMemo, useContext, useEffect, useState } from "react";
import { JobContext } from "../../context/jobContext";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

import Table from "./Table/Table";
import NoData from "./Table/NoData";
import Spinner from "../shared/Spinner/Spinner";
import UserInfo from "../shared/UserInfo/UserInfo";

import { columnData } from "../../tableConfig";

const JobsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { clearAllJobStates, jobs, getJobs, jobsForTable, setSelectedJob } =
    useContext(JobContext);
  const { userID, signOut } = useContext(AuthContext);
  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobsForTable, [jobsForTable]);

  useEffect(() => {
    if (jobs !== null) {
      setLoading(false);
      return;
    }

    const retrieveJobs = async () => {
      await getJobs(userID);
      setLoading(false);
    };

    retrieveJobs();
  }, [userID, getJobs]);

  const viewJob = (id) => {
    setSelectedJob(jobs.filter((job) => job.id === id)[0]);
    navigate(`/job/${id}`);
  };

  const signUserOut = () => {
    signOut();
    clearAllJobStates();
    navigate("/signin");
  };

  if (loading) return <Spinner />;

  return (
    <>
      <UserInfo signOut={signUserOut} />
      {!loading && jobs.length === 0 ? (
        <NoData />
      ) : (
        <Table columns={columns} data={data} viewJob={viewJob} />
      )}
    </>
  );
};

export default JobsPage;
