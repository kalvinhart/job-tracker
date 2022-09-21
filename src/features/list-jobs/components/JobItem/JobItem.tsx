import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../../common/styles/buttonStyles";
import { Span, SpanSmall, StatusSpan } from "../../../../common/styles/fontStyles";
import { Job } from "../../../../common/types/job";
import {
  InfoGroup,
  JobItemTitle,
  JobItemWrapper,
  JobTitleWrapper,
  MainJobInfo,
  SpanSalary,
} from "./JobItem.styles";
import { OptionsMenu } from "../OptionsMenu";
import { toDateString } from "../../../../common/utilities/formatDate";

type Props = {
  job: Job;
  selected: boolean;
};
const JobItem = ({ job, selected }: Props) => {
  const navigate = useNavigate();

  return (
    <JobItemWrapper selected={selected}>
      <OptionsMenu jobId={job.id!} />

      <MainJobInfo>
        <JobTitleWrapper>
          <Link to={`/job/${job.id}`}>
            <JobItemTitle>{job.title}</JobItemTitle>
          </Link>
          <StatusSpan status={job.status}>{job.status}</StatusSpan>
          <SpanSmall>{job.location}</SpanSmall>
        </JobTitleWrapper>

        <InfoGroup>
          <Span>{job.company}</Span>
        </InfoGroup>

        {job.interview && (
          <InfoGroup>
            <Span>
              You have an interview for this job on {toDateString(+job.interview)}.
            </Span>
          </InfoGroup>
        )}

        <InfoGroup>
          <SpanSalary>£{job.salary}</SpanSalary>
        </InfoGroup>

        <SpanSmall>Applied on {toDateString(+job.date)} &#8226; via Indeed</SpanSmall>
      </MainJobInfo>

      <Button variant="primary" onClick={() => navigate(`/job/${job.id}`)}>
        View Details
      </Button>
    </JobItemWrapper>
  );
};

export default JobItem;
