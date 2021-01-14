import React from "react";
// React router
import { Link } from "react-router-dom";
// Styled component
import { StyledDiv, StyledButton } from "./styles/ContinueButton.styles";

const ContinueButton = ({ path, selected }) => {
  return (
    <StyledDiv>
      <StyledButton
        component={Link}
        to={path}
        variant="contained"
        color="primary"
        disabled={selected}
      >
        Continue
      </StyledButton>
    </StyledDiv>
  );
};

export default ContinueButton;
