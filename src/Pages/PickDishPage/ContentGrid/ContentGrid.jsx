import React from "react";
// Components
import DishCardSection from "./DishCardSection/DishCardSection";
// Styled components
import { StyledContentGrid } from "./styles/ContentGrid.styles";

const ContentGrid = ({ dish }) => {
  return (
    <StyledContentGrid container spacing={3}>
      <DishCardSection {...dish} />
    </StyledContentGrid>
  );
};

export default ContentGrid;
