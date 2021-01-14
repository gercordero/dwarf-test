import React from "react";
// Components
import { ContinueOrderSection, ContinueMessage } from "../../../Components";
import DrinksCardsSection from "./DrinksCardsSection/DrinksCardsSection";
// Styled components
import { StyledContentGrid } from "./styles/ContentGrid.styles";

const ContentGrid = ({ drinks, disableButton }) => {
  // Message to show on the continue order section
  const heading = "Happy with your drink?";
  const message = "Please select at least 1 drink and then continue :)";

  return (
    <StyledContentGrid container spacing={3}>
      <DrinksCardsSection drinks={drinks} />
      <ContinueOrderSection
        render={() => <ContinueMessage heading={heading} message={message} />}
        path="/order"
        disableButton={disableButton}
      />
    </StyledContentGrid>
  );
};

export default ContentGrid;
