import React from "react";
// Components
import ContinueButton from "./ContinueButton/ContinueButton";
// Materail UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
// Styled components
import { StyledCardContent } from "./styles/ContinueOrderSection.styles";

const ContinueOrderSection = ({ render, path, selected }) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card>
        <StyledCardContent>{render()}</StyledCardContent>
        <ContinueButton path={path} selected={selected} />
      </Card>
    </Grid>
  );
};

export default ContinueOrderSection;
