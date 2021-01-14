import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Redux actions
import { addDrinksToStoreAction } from "../../../../../actions/drinks-actions";
// Material UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// Styled components
import { StyledCardMedia } from "./styles/DrinkCard.styles";

const DrinkCard = ({ drink }) => {
  // Redux state
  const dispatch = useDispatch();

  // Destructure keys that we need to render Drink Card properly
  const { name, image_url } = drink;

  return (
    <Grid item md={6}>
      <Card>
        <CardActionArea onClick={() => dispatch(addDrinksToStoreAction(drink))}>
          <StyledCardMedia image={image_url} />
          <CardContent>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default DrinkCard;
