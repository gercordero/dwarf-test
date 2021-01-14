import styled from "styled-components";
// Materail UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

export const StyledGrid = styled(Grid)`
  ${(props) => props.theme.breakpoints.down("md")} {
    margin-bottom: 5rem;
  }
`;

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

export const InstructionsContainer = styled.div`
  height: 40%;
  overflow-y: auto;
`;
