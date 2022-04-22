import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JobContext } from "../../../context/jobContext";

import { Button } from "../../../styles/buttonStyles";
import {
  SidePanelContainer,
  SidePanelGroup,
  StyledSidePanelOverlay,
} from "./SidePanel.styled";
import { H2, Span } from "../../../styles/fontStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import Form from "../../shared/Form/Form";
import { toggleSidePanel } from "../../../slices/uiSlice";

const SidePanel = () => {
  const dispatch = useDispatch();
  const { showSidePanel } = useSelector((state) => state.ui);

  const { setEditing, editing } = useContext(JobContext);

  const enableAddNew = () => {
    setEditing(false);
    dispatch(toggleSidePanel());
  };

  return (
    <>
      <StyledSidePanelOverlay show={showSidePanel} />
      <SidePanelContainer show={showSidePanel}>
        {showSidePanel && (
          <Button
            horizontal
            visible={showSidePanel}
            onClick={() => dispatch(toggleSidePanel())}
          >
            <Span>C l o s e</Span>
            <FontAwesomeIcon icon={faTimes} className="cross-icon" size="lg" />
          </Button>
        )}
        <SidePanelGroup animated show={!showSidePanel}>
          <Button vertical visible={!showSidePanel} onClick={enableAddNew}>
            <FontAwesomeIcon icon={faPlus} className="plus-icon" size="lg" />
            <Span>A</Span>
            <Span>D</Span>
            <Span>D</Span>
            <Span>N</Span>
            <Span>E</Span>
            <Span>W</Span>
          </Button>
        </SidePanelGroup>

        {showSidePanel && (
          <SidePanelGroup animated show={showSidePanel}>
            {editing ? <H2>Edit Job</H2> : <H2>Add A New Job</H2>}
            <Form />
          </SidePanelGroup>
        )}
      </SidePanelContainer>
    </>
  );
};

export default SidePanel;
