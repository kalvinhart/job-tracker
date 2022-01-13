import { useState } from "react";

import { Button } from "../../styles/buttonStyles";
import { SidePanelContainer, SidePanelGroup } from "./SidePanel.styled";
import { Span } from "../../styles/fontStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SidePanel = () => {
  const [show, setShow] = useState(false);

  return (
    <SidePanelContainer show={show}>
      <SidePanelGroup>
        <Button vertical onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={faPlus} className="plus-icon" size="lg" />
          <Span>A d d</Span>
          <Span> N e w</Span>
        </Button>
      </SidePanelGroup>
    </SidePanelContainer>
  );
};

export default SidePanel;
