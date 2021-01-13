import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// Styled components
import {
  StyledCard,
  StyledCardActions,
} from "./styles/StartOrderSection.styles";

const StartOrderSection = () => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <StyledCard raised>
        <CardContent>
          <Typography variant="h4" component="h2">
            Order Flow Box
          </Typography>
        </CardContent>
        <StyledCardActions>
          <Button
            color="primary"
            variant="contained"
            style={{ fontWeight: "bold" }}
          >
            Start Ordering
          </Button>
        </StyledCardActions>
      </StyledCard>
    </Grid>
  );
};

export default StartOrderSection;
