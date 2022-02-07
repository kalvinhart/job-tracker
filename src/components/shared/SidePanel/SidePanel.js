import { useContext } from "react";
import { JobContext } from "../../../context/jobContext";

import { Button } from "../../../styles/buttonStyles";
import { SidePanelContainer, SidePanelGroup } from "./SidePanel.styled";
import { H2, Span } from "../../../styles/fontStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import Form from "../../shared/Form/Form";

const SidePanel = () => {
  const { show, setShow, setEditing, editing, cancel } = useContext(JobContext);

  const enableAddNew = () => {
    setEditing(false);
    setShow(true);
  };

  return (
    <SidePanelContainer show={show}>
      {show && (
        <Button horizontal visible={show} onClick={cancel}>
          <Span>C l o s e</Span>
          <FontAwesomeIcon icon={faTimes} className="cross-icon" size="lg" />
        </Button>
      )}
      <SidePanelGroup animated show={!show}>
        <Button vertical visible={!show} onClick={enableAddNew}>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" size="lg" />
          <Span>A d d</Span>
          <Span> N e w</Span>
        </Button>
      </SidePanelGroup>

      {show && (
        <SidePanelGroup animated show={show}>
          {editing ? <H2>Edit Job</H2> : <H2>Add A New Job</H2>}
          <Form />
        </SidePanelGroup>
      )}
    </SidePanelContainer>
  );
};

export default SidePanel;
