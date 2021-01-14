import React from "react";
// Components
import DrinksCardsSection from "./DrinksCardsSection/DrinksCardsSection";
import { ContinueOrderSection } from "../../../Components";
// Styled components
import { StyledContentGrid } from "./styles/ContentGrid.styles";

const ContentGrid = ({ drinks, selected }) => {
  return (
    <StyledContentGrid container spacing={3}>
      <DrinksCardsSection drinks={drinks} />
      <ContinueOrderSection
        heading="Happy with your drink?"
        message="Please select at least 1 drink and then continue :)"
        path="/order"
        selected={selected}
      />
    </StyledContentGrid>
  );
};

export default ContentGrid;
