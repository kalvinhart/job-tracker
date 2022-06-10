import JobViewHeader from "../JobViewHeader/JobViewHeader";
import JobViewContent from "../JobViewContent/JobViewContent";
import AppointmentView from "../AppointmentView/AppointmentView";

import { JobViewContainer, JobViewDetailsWrapper } from "./JobView.styled";
import { Job } from "../../../../domain/entities/job";

type JobViewProps = {
  currentJob: Job;
};

const JobView = ({ currentJob }: JobViewProps) => {
  return (
    <JobViewContainer>
      <JobViewHeader currentJob={currentJob} />

      <JobViewDetailsWrapper>
        <JobViewContent currentJob={currentJob} />

        <AppointmentView />
      </JobViewDetailsWrapper>
    </JobViewContainer>
  );
};

export default JobView;
