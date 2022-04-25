import { useMemo, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

import Table from "./Table/Table";
import NoData from "./Table/NoData";
import Spinner from "../shared/Spinner/Spinner";

import { columnData } from "../../tableConfig";
import { loadAllJobs, setCurrentJob } from "../../slices/jobSlice";

const JobsPage = () => {
  const dispatch = useDispatch();
  const { loading, jobs, jobsForTable, currentJob, error } = useSelector(
    (state) => state.job
  );

  const { userID } = useContext(AuthContext);

  const navigate = useNavigate();

  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobsForTable, [jobsForTable]);

  useEffect(() => {
    if (jobs !== null) {
      return;
    }

    dispatch(loadAllJobs(userID));
  }, [jobs, userID, loadAllJobs, dispatch]);

  const viewJob = (id) => {
    dispatch(setCurrentJob(jobs.filter((job) => job.id === id)[0]));
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
