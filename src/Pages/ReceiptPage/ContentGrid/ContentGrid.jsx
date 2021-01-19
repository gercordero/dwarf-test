import React from "react";
// Components
import { ReceiptCard } from "../../../Components";
import BackToHomeButton from "./BackToHomeButton/BackToHomeButton";
// Material UI
import Grid from "@material-ui/core/Grid";
// Styled components
import { StyledGrid } from "./styles/ContentGrid.styles";

const ContentGrid = () => {
  return (
    <StyledGrid container spacing={3}>
      <BackToHomeButton />
      <ReceiptCard xs={12} sm={12} md={12} />
    </StyledGrid>
  );
};

export default ContentGrid;
