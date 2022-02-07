export const sanitiseData = (jobs) => {
  return jobs.map((job) => {
    const date =
      typeof job.date === "object" ? job.date.toDate().toDateString() : job.date;
    const interview =
      job.interview && typeof job.interview === "object"
        ? job.interview.toDate().toDateString()
        : job.interview;

    return {
      ...job,
      date,
      interview,
    };
  });
};

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
