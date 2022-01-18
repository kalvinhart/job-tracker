import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JobContext } from "../../context/jobContext";

import Spinner from "../Spinner/Spinner";

import {
  StyledJobViewHeadingDiv,
  StyledJobViewHeadingGroup,
  JobViewContainer,
  StyledJobViewDiv,
  StyledJobViewGroup,
  StyledJobViewItem,
} from "./JobView.styled";
import { StatusSpan } from "../../styles/fontStyles";
import { H2, H3, Span } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";

const JobView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { jobs, selectedJob, enableEditing } = useContext(JobContext);

  useEffect(() => {
    if (jobs === null) navigate("/");
    loading && setLoading(false);
  }, [jobs]);

  let content;

  if (loading) {
    content = (
      <JobViewContainer>
        <Spinner />
      </JobViewContainer>
    );
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
        <StyledJobViewHeadingDiv>
          <StyledJobViewHeadingGroup>
            <H2>{title}</H2>
            <StatusSpan status={status}>{status}</StatusSpan>
          </StyledJobViewHeadingGroup>

          <StyledJobViewHeadingGroup>
            <Button tertiary onClick={() => enableEditing(true)}>
              Edit
            </Button>
            <Button secondary>Delete</Button>
          </StyledJobViewHeadingGroup>
        </StyledJobViewHeadingDiv>

        <StyledJobViewDiv>
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
        </StyledJobViewDiv>
      </JobViewContainer>
    );
  }

  return content;
};

export default JobView;
