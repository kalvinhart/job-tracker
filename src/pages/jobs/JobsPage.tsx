import { useEffect } from "react";
import { useJobSlice } from "../../common/hooks/useJobSlice/useJobSlice";
import { useTableConfig } from "../../features/list-jobs/hooks/useTableConfig";

import Table from "../../features/list-jobs/Table/Table";
import NoData from "../../features/list-jobs/NoData/NoData";
import Spinner from "../../components/Spinner/Spinner";
import { useAuthentication } from "../../common/hooks/useAuthentication/useAuthentication";

const JobsPage = () => {
  const { loading, jobs, loadAllJobs, jobsForTable, viewJob } = useJobSlice();
  const { columns, data } = useTableConfig(jobsForTable);

  const { user } = useAuthentication();

  useEffect(() => {
    if (!jobs && !loading && user) {
      loadAllJobs(user);
    }
  }, [loading, jobs, loadAllJobs, user]);

  if (loading) return <Spinner />;

  return (
    <>
      {(!loading && !jobs) || jobs?.length === 0 ? (
        <NoData />
      ) : (
        <Table columns={columns} data={data} viewJob={viewJob} />
      )}
    </>
  );
};

export default JobsPage;
