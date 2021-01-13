import styled from "styled-components";
// Material UI
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

export const StyledCard = styled(Card)`
  height: 100%;
  position: relative;
`;

export const StyledCardActions = styled(CardActions)`
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
`;
