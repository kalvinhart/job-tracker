import JobViewHeader from "../JobViewHeader/JobViewHeader";
import JobViewContent from "../JobViewContent/JobViewContent";
import AppointmentView from "../AppointmentView/AppointmentView";

import { JobViewContainer, JobViewDetailsWrapper } from "./JobView.styled";
import { Job } from "../../../common/types/job";

type JobViewProps = {
  job: Job;
};

const JobView = ({ job }: JobViewProps) => {
  return (
    <JobViewContainer>
      <JobViewHeader job={job} />

      <JobViewDetailsWrapper>
        <JobViewContent job={job} />

        <AppointmentView job={job} />
      </JobViewDetailsWrapper>
    </JobViewContainer>
  );
};

export default JobView;
