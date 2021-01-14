import styled from "styled-components";
// Material UI
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledCardActions = styled(CardActions)`
  align-items: center;
  justify-content: center;
  margin-top: auto;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  font-weight: bold;
  padding: 1rem;
`;
