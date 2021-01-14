import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Redux actions
import { addDrinksToStoreAction } from "../../../../../actions/drinks-actions";
// Material UI
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// Styled components
import {
  StyledBadge,
  StyledCard,
  StyledCardMedia,
} from "./styles/DrinkCard.styles";

const DrinkCard = ({ name, image_url, id }) => {
  // Redux state
  const dispatch = useDispatch();
  const { drinks: storedDrinks } = useSelector((state) => state.drinksStore);

  // If we have stored drinks we filter them to get a matching drink and then show the amount of times it was selected.
  let filteredDrinks = 0;
  if (storedDrinks) {
    filteredDrinks = storedDrinks.filter((drink) => drink.id === id);
  }

  // Const to handle count of the selected drink
  const badgeContent =
    filteredDrinks.length !== 0 ? filteredDrinks[0].count : 0;

  // Create a new object with the data from drink that we want to save in local storage
  const saveDrink = {
    id,
    name,
    image_url,
  };

  return (
    <Grid item xs={12} sm={6} md={6}>
      <StyledBadge badgeContent={badgeContent} color="primary">
        <StyledCard>
          {/* If the card is clicked it will dispatch the add drink to store action */}
          <CardActionArea
            onClick={() => dispatch(addDrinksToStoreAction(saveDrink))}
          >
            <StyledCardMedia image={image_url} />
            <CardContent>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </StyledBadge>
    </Grid>
  );
};

export default DrinkCard;
