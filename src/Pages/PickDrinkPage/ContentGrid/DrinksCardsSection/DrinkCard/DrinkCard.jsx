import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// Styled components
import { StyledCardMedia } from "./styles/DrinkCard.styles";

const DrinkCard = ({ name, image_url }) => {
  return (
    <Grid item md={6}>
      <Card>
        <CardActionArea>
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
