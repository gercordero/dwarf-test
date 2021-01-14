import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
// Styled components
import { StyledDiv } from "./styles/Loader.styles";

const Loader = () => {
  return (
    <StyledDiv>
      <CircularProgress />
    </StyledDiv>
  );
};

export default Loader;
