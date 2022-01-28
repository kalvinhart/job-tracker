export const sanitiseData = (jobs) => {
  console.log("sanitiseData jobs: ", jobs);
  return jobs.map((job) => {
    console.log("sanitiseData job.date: ", job.date);

    const date =
      typeof job.date === "object" ? job.date.toDate().toDateString() : job.date;
    const interview =
      job.interview && typeof job.interview === "object"
        ? job.interview.toDate().toDateString()
        : job.interview;

    console.log("sanitised date: ", date);
    console.log("sanitised interview: ", interview);
    return {
      ...job,
      date,
      interview,
    };
  });
};

export const sanitiseDataForTable = (jobs) => {
  return jobs.map((job) => {
    console.log(job.interview);
    return {
      ...job,
      salary: `£${job.salary}`,
      date: job.date.toDate().toDateString(),
      interview: job.interview ? job.interview.toDate().toDateString() : "",
    };
  });
};
