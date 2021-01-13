import styled from "styled-components";
// Material UI
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const StyledCard = styled(Card)`
  height: 80%;
  position: relative;
`;

export const StyledCardActions = styled(CardActions)`
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  font-weight: bold;
  padding: 1rem;
`;
