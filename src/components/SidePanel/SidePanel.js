import { useState } from "react";

import { Button } from "../../styles/buttonStyles";
import { SidePanelContainer, SidePanelGroup } from "./SidePanel.styled";
import { Span } from "../../styles/fontStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import Form from "../Form/Form";

const SidePanel = () => {
  const [show, setShow] = useState(false);

  return (
    <SidePanelContainer show={show}>
      <Button horizontal visible={show} onClick={() => setShow(false)}>
        <Span>C l o s e</Span>
        <FontAwesomeIcon icon={faTimes} className="cross-icon" size="lg" />
      </Button>
      <SidePanelGroup show={!show}>
        <Button vertical visible={!show} onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" size="lg" />
          <Span>A d d</Span>
          <Span> N e w</Span>
        </Button>
      </SidePanelGroup>

      <SidePanelGroup animated show={show}>
        <Form />
      </SidePanelGroup>
    </SidePanelContainer>
  );
};

export default SidePanel;
