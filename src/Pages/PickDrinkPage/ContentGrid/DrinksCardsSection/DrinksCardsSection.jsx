import React from "react";
// Component
import DrinkCard from "./DrinkCard/DrinkCard";
// Material UI
import Grid from "@material-ui/core/Grid";

const DrinksCardsSection = ({ drinks }) => {
  return (
    <Grid container>
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} {...drink} />
      ))}
    </Grid>
  );
};

export default DrinksCardsSection;
