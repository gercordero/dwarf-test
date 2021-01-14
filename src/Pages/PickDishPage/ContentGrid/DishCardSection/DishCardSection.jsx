import React from "react";
// Materail UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Ingridients from "./Ingridients/Ingridients";
// Styled components
import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
} from "./styles/DishCardSection.styles";

const DishCardSection = ({
  strMealThumb,
  strMeal,
  strInstructions,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
}) => {
  const propsForIngridients = {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  };

  return (
    <Grid item md={8}>
      <StyledCard>
        <StyledCardMedia image={strMealThumb} />
        <StyledCardContent>
          <Typography variant="h4" component="h2">
            {strMeal}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {strInstructions.slice(0, 1024)}
          </Typography>
          <Ingridients {...propsForIngridients} />
        </StyledCardContent>
      </StyledCard>
    </Grid>
  );
};

export default DishCardSection;