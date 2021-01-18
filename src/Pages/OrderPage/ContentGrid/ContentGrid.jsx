import React from "react";
// Components
import Calendar from "./Calendar/Calendar";
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
        <h1>RANDOM TEXT</h1>
      </Grid>
    </StyledContentGrid>
  );
};

export default ContentGrid;
