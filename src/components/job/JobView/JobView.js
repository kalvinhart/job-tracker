import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  enableEditing,
  openSidePanel,
  setShowDeleteWarning,
} from "../../../slices/uiSlice";
import { deleteJobById } from "../../../slices/jobSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

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

const JobView = ({ currentJob }) => {
  const dispatch = useDispatch();
  const {
    showDeleteWarning: { deleteJob },
  } = useSelector((state) => state.ui);

  const openEdit = () => {
    dispatch(enableEditing());
    dispatch(openSidePanel());
  };

  const {
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
  } = currentJob;

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
          <Button secondary onClick={openEdit}>
            <FontAwesomeIcon icon={faEdit} />
            Edit
          </Button>
          <Button
            danger
            onClick={() => dispatch(setShowDeleteWarning({ deleteJob: true }))}
          >
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </Button>
        </StyledJobViewHeadingGroup>

        {deleteJob && (
          <DeleteConfirm
            redirect={true}
            hide={() => dispatch(setShowDeleteWarning({ deleteJob: false }))}
            id={id}
            actionDelete={() => dispatch(deleteJobById(id))}
          />
        )}
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

        <AppointmentView currentJob={currentJob} />
      </JobViewContentWrapper>
    </JobViewContainer>
  );
};

export default JobView;
