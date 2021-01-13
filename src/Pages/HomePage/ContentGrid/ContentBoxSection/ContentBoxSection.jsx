import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// Styled components
import { StyledCard } from "./styles/ContentBoxSection.styles";

const ContentBoxSection = () => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <StyledCard raised>
        <CardContent>
          <Typography variant="h4" component="h2">
            Content Box
          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default ContentBoxSection;
