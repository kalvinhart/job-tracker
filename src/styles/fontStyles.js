import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 36px;
  text-align: center;
  color: var(--clr-primary);
`;

export const H2 = styled.h2`
  display: inline-block;
  font-size: 24px;
  color: var(--clr-primary);
`;

export const H3 = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  color: var(--clr-primary);
`;

export const Span = styled.span`
  font-size: 16px;

  ${({ multiline }) => multiline && "white-space: pre-wrap;"}
`;

export const BenefitSpan = styled.span`
  padding: 2px 10px;
  border-radius: var(--border-radius);
  font-size: 12px;
  font-weight: bold;
  background-color: var(--clr-primary-rgba);
  color: var(--clr-primary);

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const StatusSpan = styled.span`
  padding: 2px 10px;
  border-radius: var(--border-radius);
  font-size: 12px;
  font-weight: bold;

  ${(props) => {
    switch (props.status) {
      case "Pending":
        return "background-color: rgba(223, 230, 233,0.5); color: #636e72;";
      case "Interview":
        return "background-color: rgba(255, 234, 167,0.5); color: #fdcb6e;";
      case "Rejected":
        return "background-color: rgba(255, 118, 117,0.5); color: #d63031;";
      case "Expired":
        return "background-color: rgba(99, 110, 114,0.5); color: #2d3436;";
      default:
        return;
    }
  }}
`;

export const ErrorSpan = styled.span`
  position: absolute;
  top: 110%;
  left: 0;
  font-size: 12px;
  color: var(--clr-primary);

  ${({ inline }) => inline && "position: static;"}

  & svg {
    margin-right: 4px;
  }
`;

export const BoldSpanLarge = styled.span`
  font-weight: bold;
  font-size: 22px;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 15px;
`;
