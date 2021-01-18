import React from "react";
// Components
import Calendar from "./Calendar/Calendar";
// Styled components
import { StyledContentGrid } from "./styles/ContentGrid.styles";

const ContentGrid = () => {
  return (
    <StyledContentGrid container spacing={3}>
      <Calendar />
    </StyledContentGrid>
  );
};

export default ContentGrid;
