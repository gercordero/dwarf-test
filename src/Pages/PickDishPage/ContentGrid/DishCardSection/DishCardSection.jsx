import React from "react";
// Components
import Ingridients from "./Ingridients/Ingridients";
import GenerateNewDish from "./GenerateNewDish/GenerateNewDish";
// Materail UI
import Typography from "@material-ui/core/Typography";
// Styled components
import {
  StyledGrid,
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  InstructionsContainer,
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
  // Easy way to pass props to child component
  const propsForIngridients = {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  };

  return (
    <StyledGrid item md={8}>
      {/* Dish Card */}
      <StyledCard>
        <StyledCardMedia image={strMealThumb} />
        <StyledCardContent>
          <Typography variant="h4" component="h2">
            {strMeal}
          </Typography>
          <InstructionsContainer>
            <Typography variant="body1" color="textSecondary" component="p">
              {strInstructions}
            </Typography>
          </InstructionsContainer>
          <Typography variant="h5" component="h3" style={{ marginTop: "2rem" }}>
            Ingridients
          </Typography>
          <Ingridients {...propsForIngridients} />
        </StyledCardContent>
      </StyledCard>
      {/* Generate new dish button */}
      <GenerateNewDish />
    </StyledGrid>
  );
};

export default DishCardSection;
