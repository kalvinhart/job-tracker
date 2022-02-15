import { useMemo, useContext, useEffect, useState } from "react";
import { JobContext } from "../../context/jobContext";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

import Table from "./Table/Table";
import NoData from "./Table/NoData";
import Spinner from "../shared/Spinner/Spinner";

import { columnData } from "../../tableConfig";

const JobsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { jobs, getJobs, jobsForTable, setSelectedJob } = useContext(JobContext);
  const { userID } = useContext(AuthContext);
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
  }, [jobs, userID, getJobs]);

  const viewJob = (id) => {
    setSelectedJob(jobs.filter((job) => job.id === id)[0]);
    navigate(`/job/${id}`);
  };

  if (loading) return <Spinner />;

  return (
    <>
      {!loading && jobs.length === 0 ? (
        <NoData />
      ) : (
        <Table columns={columns} data={data} viewJob={viewJob} />
      )}
    </>
  );
};

export default JobsPage;
