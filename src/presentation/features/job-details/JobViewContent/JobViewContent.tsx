import {
  JobViewContentWrapper,
  StyledJobViewGroup,
  StyledJobViewItem,
} from "./JobViewContent.styles";

import { StyledBg } from "../../../styles/bgStyles";
import { H3, Span } from "../../../styles/fontStyles";
import { Job } from "../../../../domain/entities/job";

type JobViewContentProps = {
  currentJob: Job;
};

const JobViewContent = ({ currentJob }: JobViewContentProps) => {
  const {
    benefits,
    company,
    contactName,
    contactNumber,
    date,
    description,
    location,
    salary,
  } = currentJob;

  return (
    <JobViewContentWrapper>
      <StyledBg>
        <StyledJobViewGroup>
          <StyledJobViewItem>
            <H3>Company:</H3>
            <Span>{company}</Span>
          </StyledJobViewItem>

          <StyledJobViewItem>
            <H3>Location:</H3>
            <Span>{location}</Span>
          </StyledJobViewItem>

          <StyledJobViewItem>
            <H3>Salary:</H3>
            <Span>{`£${salary}`}</Span>
          </StyledJobViewItem>
        </StyledJobViewGroup>

        <StyledJobViewGroup>
          <StyledJobViewItem>
            <H3>Contact Name:</H3>
            <Span>{contactName}</Span>
          </StyledJobViewItem>

          <StyledJobViewItem>
            <H3>Contact Number:</H3>
            <Span>{contactNumber}</Span>
          </StyledJobViewItem>

          <StyledJobViewItem>
            <H3>Date Applied:</H3>
            <Span>{new Date(date).toDateString()}</Span>
          </StyledJobViewItem>
        </StyledJobViewGroup>

        <StyledJobViewGroup>
          <StyledJobViewItem>
            <H3>Benefits:</H3>
            <Span>{benefits}</Span>
          </StyledJobViewItem>
        </StyledJobViewGroup>

        <H3>Job Description:</H3>
        <Span multiline>{description}</Span>
      </StyledBg>
    </JobViewContentWrapper>
  );
};

export default JobViewContent;
