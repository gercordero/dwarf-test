import React from "react";
// Components
import ContinueButton from "./ContinueButton/ContinueButton";
// Materail UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
// Styled components
import { StyledCardContent } from "./styles/ContinueOrderSection.styles";

const ContinueOrderSection = ({ heading, message, path }) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card>
        <StyledCardContent>
          <Typography variant="h4" component="h2">
            {heading}
          </Typography>
          <Typography variant="h6" component="p">
            {message}
          </Typography>
        </StyledCardContent>
        <ContinueButton path={path} />
      </Card>
    </Grid>
  );
};

export default ContinueOrderSection;
