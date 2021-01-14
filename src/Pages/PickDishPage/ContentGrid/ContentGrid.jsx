import React from "react";
// Components
import DishCardSection from "./DishCardSection/DishCardSection";
import { ContinueOrderSection } from "../../../Components";
// Styled components
import { StyledContentGrid } from "./styles/ContentGrid.styles";

const ContentGrid = ({ dish }) => {
  return (
    <StyledContentGrid container spacing={3}>
      <DishCardSection {...dish} />
      <ContinueOrderSection
        heading="Like what you see?"
        message="If you like this dish click on continue"
        path="/pick-drink"
        selected={false}
      />
    </StyledContentGrid>
  );
};

export default ContentGrid;
