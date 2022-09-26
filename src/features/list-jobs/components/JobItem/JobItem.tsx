import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../../common/styles/buttonStyles";
import { Span, SpanSmall, StatusSpan } from "../../../../common/styles/fontStyles";
import { Job } from "../../../../common/types/job";
import {
  CancelSelectButton,
  InfoGroup,
  JobItemTitle,
  JobItemWrapper,
  JobTitleWrapper,
  MainJobInfo,
  SpanSalary,
} from "./JobItem.styles";
import { OptionsMenu } from "../OptionsMenu";
import { toDateString } from "../../../../common/utilities/formatDate";
import { useJobListContext } from "../../hooks/useJobListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "../../../../common/hooks/useMediaQuery/useMediaQuery";
import { mediaSizes } from "../../../../common/styles/media";

type Props = {
  job: Job;
  selected: boolean;
};
const JobItem = ({ job, selected }: Props) => {
  const navigate = useNavigate();
  const isNotMobile = useMediaQuery(`(min-width: ${mediaSizes.small})`);

  const { handleJobDeselect } = useJobListContext();

  return (
    <JobItemWrapper selected={selected}>
      {selected ? (
        <CancelSelectButton onClick={() => handleJobDeselect(job.id!)}>
          <FontAwesomeIcon icon={faTimes} />
          Undo Select
        </CancelSelectButton>
      ) : (
        <OptionsMenu job={job} />
      )}

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
            <Span data-testid="job-item-interview-date">
              You have an interview for this job on {toDateString(+job.interview)}.
            </Span>
          </InfoGroup>
        )}

        <InfoGroup>
          <SpanSalary>£{job.salary}</SpanSalary>
        </InfoGroup>

        <SpanSmall data-testid="job-item-applied-date">
          Applied on {toDateString(+job.date)}
          {job.resource && job.resource !== "Other" && ` • via ${job.resource}`}
        </SpanSmall>
      </MainJobInfo>

      <Button variant="primary" onClick={() => navigate(`/job/${job.id}`)}>
        {isNotMobile ? "View Details" : "View"}
      </Button>
    </JobItemWrapper>
  );
};

export default JobItem;
