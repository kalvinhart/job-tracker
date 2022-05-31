import { Job } from "../../domain/entities/job";

export const sanitiseDataForTable = (jobs: Job[]) => {
  return jobs.map((job) => {
    const interview =
      typeof job.interview === "number"
        ? new Date(job.interview).toDateString()
        : job.interview;

    let benefits =
      job.benefits !== "" && job.benefits?.includes(",")
        ? job.benefits.split(",")
        : job.benefits;

    if (typeof benefits === "string" && benefits.split("").length > 45) {
      benefits = `${benefits.slice(0, 45)}...`;
    }

    return {
      ...job,
      benefits,
      salary: `£${job.salary}`,
      date: new Date(job.date).toDateString(),
      interview,
    };
  });
};
