import React from "react";
// Materail UI
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
// Styled components
import { StyledCard, StyledCardMedia } from "./styles/DishCardSection.styles";

const DishCardSection = ({ imageUrl }) => {
  return (
    <Grid item md={8}>
      <StyledCard>
        <StyledCardMedia image={imageUrl} />
      </StyledCard>
    </Grid>
  );
};

export default DishCardSection;
