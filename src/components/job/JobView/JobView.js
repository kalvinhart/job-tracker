import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AppointmentView from "../AppointmentView/AppointmentView";
import DeleteConfirm from "../../shared/DeleteConfirm/DeleteConfirm";

import {
  StyledJobViewHeadingDiv,
  StyledJobViewHeadingGroup,
  JobViewContainer,
  JobViewContentWrapper,
  StyledJobViewGroup,
  StyledJobViewItem,
} from "./JobView.styled";
import { StyledBg } from "../../../styles/bgStyles";
import { StatusSpan } from "../../../styles/fontStyles";
import { H2, H3, Span } from "../../../styles/fontStyles";
import { Button } from "../../../styles/buttonStyles";

const JobView = ({
  benefits,
  company,
  contactName,
  contactNumber,
  date,
  description,
  id,
  interview,
  location,
  salary,
  status,
  title,
  enableEditing,
  removeJob,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <JobViewContainer>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </Link>
      <StyledJobViewHeadingDiv>
        <StyledJobViewHeadingGroup>
          <H2>{title}</H2>
          <StatusSpan status={status}>{status}</StatusSpan>
        </StyledJobViewHeadingGroup>

        <StyledJobViewHeadingGroup>
          <Button tertiary onClick={enableEditing}>
            Edit
          </Button>
          <Button secondary onClick={() => setShowDeleteModal(true)}>
            Delete
          </Button>
        </StyledJobViewHeadingGroup>

        <DeleteConfirm
          redirect={true}
          show={showDeleteModal}
          hide={() => setShowDeleteModal(false)}
          id={id}
          actionDelete={removeJob}
          setShowDeleteModal={setShowDeleteModal}
        />
      </StyledJobViewHeadingDiv>

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
              <Span>{date?.toDate().toDateString()}</Span>
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
        <AppointmentView id={id} interview={interview ? interview : undefined} />
      </JobViewContentWrapper>
    </JobViewContainer>
  );
};

export default JobView;
