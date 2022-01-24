import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { JobContext } from "../../context/jobContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner/Spinner";
import Modal from "../Modal/Modal";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";

import {
  StyledJobViewHeadingDiv,
  StyledJobViewHeadingGroup,
  JobViewContainer,
  StyledJobViewGroup,
  StyledJobViewItem,
} from "./JobView.styled";
import { StyledBg } from "../../styles/bgStyles";
import { StatusSpan } from "../../styles/fontStyles";
import { H2, H3, Span } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";

const JobView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { jobs, selectedJob, enableEditing } = useContext(JobContext);

  useEffect(() => {
    if (jobs === null) navigate("/");
    loading && setLoading(false);
  }, [jobs]);

  let content;

  if (loading) {
    content = <Spinner />;
  } else {
    const {
      benefits,
      company,
      contactName,
      contactNumber,
      date,
      description,
      interview,
      location,
      notes,
      salary,
      status,
      title,
    } = selectedJob;

    content = (
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
          <Modal show={showDeleteModal} hide={() => setShowDeleteModal(false)}>
            <DeleteConfirm id={id} setShowDeleteModal={setShowDeleteModal} />
          </Modal>
        </StyledJobViewHeadingDiv>

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
              <Span>{date.toDate().toDateString()}</Span>
            </StyledJobViewItem>
          </StyledJobViewGroup>

          <StyledJobViewGroup>
            <StyledJobViewItem>
              <H3>Benefits:</H3>
              <Span>{benefits}</Span>
            </StyledJobViewItem>
          </StyledJobViewGroup>

          <H3>Job Description:</H3>
          <Span>{description}</Span>
        </StyledBg>
      </JobViewContainer>
    );
  }

  return content;
};

export default JobView;
