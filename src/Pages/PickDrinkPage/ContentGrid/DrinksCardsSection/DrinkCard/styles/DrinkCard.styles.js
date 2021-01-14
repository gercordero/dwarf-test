import styled from "styled-components";
// Material UI
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Badge from "@material-ui/core/Badge";

export const StyledBadge = styled(Badge)`
  display: flex;
  & > span {
    transform: scale(2) translate(50%, -50%);
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
`;

export const StyledCardMedia = styled(CardMedia)`
  background-size: contain;
  height: 20rem;
  margin-top: 1rem;
`;
