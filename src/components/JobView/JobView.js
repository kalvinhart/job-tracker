import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  StyledJobViewHeadingDiv,
  StyledJobViewHeadingGroup,
  JobViewContainer,
  StyledJobViewDiv,
  StyledJobViewGroup,
  StyledJobViewItem,
} from "./JobView.styled";
import { StatusSpan } from "../Table/Table.styled";
import { H2, H3, Span } from "../../styles/fontStyles";
import { Button } from "../../styles/buttonStyles";

const JobView = () => {
  const { id } = useParams();
  const [editing, setEditing] = useState(false);

  return (
    <JobViewContainer>
      <StyledJobViewHeadingDiv>
        <StyledJobViewHeadingGroup>
          <H2>Job Title</H2>
          <StatusSpan status="Pending">Status</StatusSpan>
        </StyledJobViewHeadingGroup>

        <StyledJobViewHeadingGroup>
          <Button tertiary>Edit</Button>
          <Button secondary>Delete</Button>
        </StyledJobViewHeadingGroup>
      </StyledJobViewHeadingDiv>

      <StyledJobViewDiv>
        <StyledJobViewGroup>
          <StyledJobViewItem>
            <H3>Company:</H3>
            <Span>Information</Span>
          </StyledJobViewItem>

          <StyledJobViewItem>
            <H3>Location:</H3>
            <Span>Information</Span>
          </StyledJobViewItem>

          <StyledJobViewItem>
            <H3>Salary:</H3>
            <Span>Information</Span>
          </StyledJobViewItem>
        </StyledJobViewGroup>

        <StyledJobViewGroup>
          <StyledJobViewItem>
            <H3>Contact Name:</H3>
            <Span>Information</Span>
          </StyledJobViewItem>

          <StyledJobViewItem>
            <H3>Contact Number:</H3>
            <Span>Information</Span>
          </StyledJobViewItem>

          <StyledJobViewItem>
            <H3>Date Applied:</H3>
            <Span>Information</Span>
          </StyledJobViewItem>
        </StyledJobViewGroup>

        <StyledJobViewGroup>
          <StyledJobViewItem>
            <H3>Benefits:</H3>
            <Span>Information</Span>
          </StyledJobViewItem>
        </StyledJobViewGroup>

        <H3>Job Description:</H3>
        <Span>Information</Span>
      </StyledJobViewDiv>
    </JobViewContainer>
  );
};

export default JobView;
