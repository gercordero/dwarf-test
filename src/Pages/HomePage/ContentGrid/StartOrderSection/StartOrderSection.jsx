import React from "react";
// React router
import { Link as RouterLink } from "react-router-dom";
// Material UI
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// Styled components
import {
  StyledCard,
  StyledCardActions,
  StyledButton,
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
          <Link component={RouterLink} to="/pick-dish">
            <StyledButton color="primary" variant="contained">
              Start Ordering
            </StyledButton>
          </Link>
        </StyledCardActions>
      </StyledCard>
    </Grid>
  );
};

export default StartOrderSection;
