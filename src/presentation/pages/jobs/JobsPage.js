import { useJobs } from "../../features/list-jobs/hooks/useJobs";
import { useTableConfig } from "../../features/list-jobs/hooks/useTableConfig";

import Table from "../../features/list-jobs/Table/Table";
import NoData from "../../features/list-jobs/Table/NoData";
import Spinner from "../../components/Spinner/Spinner";

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
