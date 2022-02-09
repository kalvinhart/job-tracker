import { useMemo, useContext } from "react";
import { JobContext } from "../../context/jobContext";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

import Table from "./Table/Table";
import NoData from "./Table/NoData";

import Spinner from "../shared/Spinner/Spinner";

import { columnData } from "../../tableConfig";
import UserInfo from "../shared/UserInfo/UserInfo";

const JobsPage = () => {
  const navigate = useNavigate();
  const { jobs, loading, jobsForTable, setSelectedJob } = useContext(JobContext);
  const { signOut } = useContext(AuthContext);
  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobsForTable, [jobsForTable]);

  const viewJob = (id) => {
    setSelectedJob(jobs.filter((job) => job.id === id)[0]);
    navigate(`/job/${id}`);
  };

  const signUserOut = () => {
    signOut();
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
