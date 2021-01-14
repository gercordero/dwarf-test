import React from "react";
// React router
import { Link as RouterLink } from "react-router-dom";
// Material UI
import Link from "@material-ui/core/Link";
// Styled component
import { StyledDiv, StyledButton } from "./styles/ContinueButton.styles";

const ContinueButton = ({ path, selected }) => {
  return (
    <StyledDiv>
      <StyledButton variant="contained" color="primary" disabled={selected}>
        <Link
          component={RouterLink}
          to={path}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Continue
        </Link>
      </StyledButton>
    </StyledDiv>
  );
};

export default ContinueButton;
