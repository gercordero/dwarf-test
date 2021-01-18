import React from "react";
// Components
import Calendar from "./Calendar/Calendar";
import FormSection from "./FormSection/FormSection";
// Styled components
import { StyledContentGrid } from "./styles/ContentGrid.styles";
// Material UI
import Grid from "@material-ui/core/Grid";

const ContentGrid = () => {
  return (
    <StyledContentGrid container spacing={3}>
      <Grid item md={5}>
        <Calendar />
      </Grid>
      <Grid item md={7}>
        <FormSection />
      </Grid>
    </StyledContentGrid>
  );
};

export default ContentGrid;
