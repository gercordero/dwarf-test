import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Styled components
import { ImgContainer, StyledImg, TextContainer } from "./styles/Drink.styles";

const Drink = ({ drink }) => {
  const { image_url, name, count } = drink;

  return (
    <Grid container spacing={2}>
      {/* IMAGE */}
      <ImgContainer item sm={4} md={4}>
        <StyledImg src={image_url} alt={name} />
      </ImgContainer>
      {/* DRINK NAME */}
      <TextContainer item sm={8} md={8}>
        <Typography variant="body1">
          <strong>
            {name} x {count}
          </strong>
        </Typography>
      </TextContainer>
    </Grid>
  );
};

export default Drink;
