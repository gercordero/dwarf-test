import React from "react";
// React router
import { Link as RouterLink } from "react-router-dom";
// Material UI
import Link from "@material-ui/core/Link";
// Styled component
import { StyledDiv, StyledButton } from "./styles/ContinueButton.styles";

const ContinueButton = ({ path }) => {
  return (
    <StyledDiv>
      <Link component={RouterLink} to={path}>
        <StyledButton variant="contained" color="primary">
          Continue
        </StyledButton>
      </Link>
    </StyledDiv>
  );
};

export default ContinueButton;
