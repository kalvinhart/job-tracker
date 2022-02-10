export const sanitiseDataForTable = (jobs) => {
  return jobs.map((job) => {
    console.log(job.interview);
    const interview =
      typeof job.interview === "object"
        ? job.interview.toDate().toDateString()
        : job.interview;
    return {
      ...job,
      salary: `£${job.salary}`,
      date: job.date.toDate().toDateString(),
      interview,
    };
  });
};
