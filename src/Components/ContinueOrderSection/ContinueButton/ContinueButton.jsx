import React from "react";
// React router
import { Link } from "react-router-dom";
// Styled component
import { StyledDiv, StyledButton } from "./styles/ContinueButton.styles";

const ContinueButton = ({ path, disableButton }) => {
  return (
    <StyledDiv>
      <StyledButton
        component={Link}
        to={path}
        variant="contained"
        color="primary"
        disabled={disableButton}
      >
        Continue
      </StyledButton>
    </StyledDiv>
  );
};

export default ContinueButton;
