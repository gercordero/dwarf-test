import styled from "styled-components";
// Materail UI
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

export const StyledCard = styled(Card)`
  height: 100%;
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 50%;
`;

export const StyledCardContent = styled(CardContent)`
  height: 50%;
  & p {
    margin-top: 2rem;
  }
`;
