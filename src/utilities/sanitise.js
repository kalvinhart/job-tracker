export const sanitiseDataForTable = (jobs) => {
  return jobs.map((job) => {
    const interview =
      typeof job.interview === "object"
        ? job.interview.toDate().toDateString()
        : job.interview;

    const benefits = job.benefits.split(",");

    return {
      ...job,
      benefits,
      salary: `£${job.salary}`,
      date: job.date.toDate().toDateString(),
      interview,
    };
  });
};
