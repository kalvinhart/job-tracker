import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faGlobe,
  faMapMarkerAlt,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";

import {
  BenefitsGroup,
  IconsGroup,
  JobSpecificsGroup,
  JobSpecificsWrapper,
  JobViewContentWrapper,
  JobViewGroup,
  JobViewTitleWrapper,
} from "./JobViewContent.styles";

import { Background } from "../../../common/styles/bgStyles";
import {
  Span,
  SpanBenefit,
  SpanBoldLarge,
  SpanSmall,
  StatusSpan,
} from "../../../common/styles/fontStyles";

import { toDateString } from "../../../common/utilities/formatDate";

import { Job } from "../../../common/types/job";

type JobViewContentProps = {
  job: Job;
};

const JobViewContent = ({ job }: JobViewContentProps) => {
  const {
    benefits,
    company,
    contactName,
    contactNumber,
    date,
    description,
    location,
    resource,
    salary,
    status,
    title,
  } = job;

  return (
    <JobViewContentWrapper>
      <Background>
        <JobViewGroup>
          <JobViewTitleWrapper>
            <SpanBoldLarge>{title}</SpanBoldLarge>
            <StatusSpan status={status}>{status}</StatusSpan>
          </JobViewTitleWrapper>
          <Span>{company}</Span>
          <SpanSmall>Applied on {toDateString(+date)}</SpanSmall>
        </JobViewGroup>

        <JobSpecificsWrapper>
          <JobSpecificsGroup>
            <IconsGroup>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              <Span>{location}</Span>
            </IconsGroup>

            <IconsGroup>
              <FontAwesomeIcon icon={faPoundSign} size="lg" />
              <Span>£{salary}</Span>
            </IconsGroup>
          </JobSpecificsGroup>

          <JobSpecificsGroup>
            <IconsGroup>
              <FontAwesomeIcon icon={faAddressBook} size="lg" />
              <Span>
                {contactName && contactNumber
                  ? `${contactName} (${contactNumber})`
                  : "n/a"}
              </Span>
            </IconsGroup>

            <IconsGroup>
              <FontAwesomeIcon icon={faGlobe} size="lg" />
              <Span>
                {resource && resource !== "Other" ? `via ${resource}` : "Not specified"}
              </Span>
            </IconsGroup>
          </JobSpecificsGroup>
        </JobSpecificsWrapper>

        {benefits && (
          <BenefitsGroup>
            {benefits.split(",").map((b) => (
              <SpanBenefit key={b}>{b}</SpanBenefit>
            ))}
          </BenefitsGroup>
        )}

        <JobViewGroup>
          <Span multiline>{description}</Span>
        </JobViewGroup>
      </Background>
    </JobViewContentWrapper>
  );
};

export default JobViewContent;
