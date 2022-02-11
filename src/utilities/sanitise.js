export const sanitiseDataForTable = (jobs) => {
  return jobs.map((job) => {
    const interview =
      typeof job.interview === "object"
        ? job.interview.toDate().toDateString()
        : job.interview;

    let benefits =
      job.benefits !== "" && job.benefits.includes(",")
        ? job.benefits.split(",")
        : job.benefits;

    if (typeof benefits === "string" && benefits.split("").length > 45) {
      benefits = `${benefits.slice(0, 45)}...`;
    }

    return {
      ...job,
      benefits,
      salary: `£${job.salary}`,
      date: job.date.toDate().toDateString(),
      interview,
    };
  });
};
