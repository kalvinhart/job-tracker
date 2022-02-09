export const sanitiseDataForTable = (jobs) => {
  return jobs.map((job) => {
    return {
      ...job,
      salary: `£${job.salary}`,
      date: job.date.toDate().toDateString(),
      interview: job.interview ? job.interview.toDate().toDateString() : "",
    };
  });
};
