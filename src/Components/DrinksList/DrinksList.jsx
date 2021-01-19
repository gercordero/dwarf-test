import React from "react";
// Components
import Drink from "./Drink/Drink";
// Material UI
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const DrinksList = ({ drinks }) => {
  return (
    <Grid container>
      {drinks.map((drink) => (
        <span key={drink.id} style={{ width: "100%", marginTop: "1rem" }}>
          <Grid item xs={12} sm={12} md={12}>
            <Drink drink={drink} />
          </Grid>
          <Divider style={{ marginTop: "1rem" }} />
        </span>
      ))}
    </Grid>
  );
};

export default DrinksList;
