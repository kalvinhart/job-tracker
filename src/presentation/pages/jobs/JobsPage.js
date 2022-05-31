import { useJobs } from "../../hooks/useJobs/useJobs";
import { useTableConfig } from "../../hooks/useTableConfig/useTableConfig";

import Table from "../../features/list-jobs/Table/Table";
import NoData from "../../features/list-jobs/Table/NoData";
import Spinner from "../../shared/Spinner/Spinner";

const JobsPage = () => {
  const { loading, jobs, jobsForTable, viewJob } = useJobs();
  const { columns, data } = useTableConfig(jobsForTable);

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
