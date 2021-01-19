import React from "react";
// Componets
import { Ingridients } from "../../";
// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Styled components
import { ImgContainer, StyledImg, TextContainer } from "./styles/Dish.styles";

const Dish = ({ dish }) => {
  const { strMeal, strMealThumb } = dish;

  return (
    <Grid container>
      {/* IMAGE */}
      <ImgContainer item sm={4} md={2}>
        <StyledImg src={strMealThumb} alt={strMeal} />
      </ImgContainer>
      {/* DISH NAME */}
      <TextContainer item sm={4} md={4}>
        <Typography variant="body1">
          <strong>{strMeal}</strong>
        </Typography>
      </TextContainer>
      {/* INGRIDIENTS */}
      <Grid item sm={4} md={6}>
        <Ingridients {...dish} />
      </Grid>
    </Grid>
  );
};

export default Dish;
