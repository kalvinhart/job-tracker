import { useMemo, useContext } from "react";
import { JobContext } from "../../context/jobContext";
import { useNavigate } from "react-router-dom";

import Table from "./Table/Table";
import NoData from "./Table/NoData";

import Spinner from "../shared/Spinner/Spinner";

import { columnData } from "../../tableConfig";

const JobsPage = () => {
  const navigate = useNavigate();
  const { jobs, loading, jobsForTable, setSelectedJob } = useContext(JobContext);
  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobsForTable, [jobsForTable]);

  const viewJob = (id) => {
    setSelectedJob(jobs.filter((job) => job.id === id)[0]);
    navigate(`/job/${id}`);
  };

  if (loading) return <Spinner />;
  if (!loading && jobs.length === 0) return <NoData />;

  return <Table columns={columns} data={data} viewJob={viewJob} />;
};

export default JobsPage;
