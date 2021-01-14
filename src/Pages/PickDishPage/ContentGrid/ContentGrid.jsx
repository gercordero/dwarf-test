import React from "react";
// Components
import { ContinueOrderSection, ContinueMessage } from "../../../Components";
import DishCardSection from "./DishCardSection/DishCardSection";
// Styled components
import { StyledContentGrid } from "./styles/ContentGrid.styles";

const ContentGrid = ({ dish }) => {
  // Message to show on the continue order section
  const heading = "Happy with this meal?";
  const message = "If you like this dish click on continue!";

  return (
    <StyledContentGrid container spacing={3}>
      <DishCardSection {...dish} />
      <ContinueOrderSection
        render={() => <ContinueMessage heading={heading} message={message} />}
        path="/pick-drink"
        selected={false}
      />
    </StyledContentGrid>
  );
};

export default ContentGrid;
