import React from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import { DrinksList } from "../";
// Material UI
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// Styled components
import { StyledCard, DrinksContainer } from "./styles/ReceiptCard.styles";

const ReceiptCard = ({ md, sm, xs, style }) => {
  const { drinks } = useSelector((state) => state.drinksStore);

  return (
    <Grid item xs={xs} sm={sm} md={md} style={style}>
      <StyledCard>
        {/* Heading */}
        <CardContent>
          <Typography variant="h3" component="h1">
            Receipt
          </Typography>
          <Divider style={{ marginTop: "1rem" }} />
        </CardContent>
        {/* Drinks */}
        <CardContent>
          <Typography variant="h4" component="h2">
            Drinks
          </Typography>
          <DrinksContainer>
            <DrinksList drinks={drinks} />
          </DrinksContainer>
        </CardContent>
        {/* Dish */}
      </StyledCard>
    </Grid>
  );
};

export default ReceiptCard;
