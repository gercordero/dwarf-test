import React from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import UserDetails from "./UserDetails/UserDetails";
import Dish from "./Dish/Dish";
import { DrinksList } from "../";
// Material UI
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// Styled components
import {
  StyledCard,
  DishContainer,
  DrinksContainer,
} from "./styles/ReceiptCard.styles";

const ReceiptCard = ({ md, sm, xs, style }) => {
  const order = useSelector((state) => state.order);
  const { dish } = useSelector((state) => state.dishGet);
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
        {/* Details */}
        <CardContent>
          <Typography variant="h4" component="h2">
            Your Details
          </Typography>
          <UserDetails order={order} />
          <Divider style={{ marginTop: "1rem" }} />
        </CardContent>
        {/* Dish */}
        <CardContent>
          <Typography variant="h4" component="h2">
            Dish
          </Typography>
          <DishContainer>
            <Dish dish={dish} />
          </DishContainer>
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
      </StyledCard>
    </Grid>
  );
};

export default ReceiptCard;
