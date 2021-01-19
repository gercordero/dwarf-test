import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Styled components
import { StyledGrid } from "./styles/UserDetails.styles";

const Dish = ({ order }) => {
  const { date, email, peopleAmount } = order;

  return (
    <StyledGrid container spacing={3}>
      {/* EMAIL */}
      <Grid item sm={12} md={12}>
        <Typography variant="body1" component="p">
          <strong>Email: </strong>
          {email}
        </Typography>
      </Grid>
      {/* DATE */}
      <Grid item sm={12} md={12}>
        <Typography variant="body1" component="p">
          <strong>Date of order: </strong>
          {date.day}/{date.month}/{date.year}
        </Typography>
      </Grid>
      {/* AMOUNT OF PEOPLE */}
      <Grid item sm={12} md={12}>
        <Typography variant="body1" component="p">
          <strong>Amount of people: </strong>
          {peopleAmount}
        </Typography>
      </Grid>
    </StyledGrid>
  );
};

export default Dish;
