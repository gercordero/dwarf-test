import React from "react";
// Component
import DrinkCard from "./DrinkCard/DrinkCard";
// Material UI
import Grid from "@material-ui/core/Grid";

const DrinksCardsSection = ({ drinks }) => {
  return (
    <Grid item md={8}>
      <Grid container spacing={3}>
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} {...drink} />
        ))}
      </Grid>
    </Grid>
  );
};

export default DrinksCardsSection;
