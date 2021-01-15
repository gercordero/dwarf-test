import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// Styled components
import {
  StyledCard,
  StyledForm,
  StyledButton,
} from "./styles/FindOrderSection";

const FindOrderSection = () => {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <StyledCard raised>
        <CardContent>
          <Typography variant="h4" component="h2">
            Find Your Order
          </Typography>
        </CardContent>
        <CardContent>
          <StyledForm onSubmit={(e) => e.preventDefault()}>
            <TextField variant="outlined" typ="email" label="Email" />
            <StyledButton type="submit" color="primary" variant="contained">
              Find
            </StyledButton>
          </StyledForm>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default FindOrderSection;
