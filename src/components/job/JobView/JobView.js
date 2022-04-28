import JobViewHeader from "../JobViewHeader/JobViewHeader";
import JobViewContent from "../JobViewContent/JobViewContent";
import AppointmentView from "../AppointmentView/AppointmentView";

import { JobViewContainer, JobViewDetailsWrapper } from "./JobView.styled";

const JobView = () => {
  return (
    <JobViewContainer>
      <JobViewHeader />

      <JobViewDetailsWrapper>
        <JobViewContent />

        <AppointmentView />
      </JobViewDetailsWrapper>
    </JobViewContainer>
  );
};

export default JobView;
