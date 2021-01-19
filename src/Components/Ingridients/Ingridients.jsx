import React from "react";
// Materail UI
import Chip from "@material-ui/core/Chip";
// Styled components
import { StyledDiv } from "./styles/Ingridients.styles";

const Ingridients = ({
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
}) => {
  return (
    <StyledDiv>
      {strIngredient1 && <Chip label={strIngredient1} color="primary" />}
      {strIngredient2 && <Chip label={strIngredient2} color="secondary" />}
      {strIngredient3 && <Chip label={strIngredient3} color="primary" />}
      {strIngredient4 && <Chip label={strIngredient4} color="secondary" />}
      {strIngredient5 && <Chip label={strIngredient5} color="primary" />}
    </StyledDiv>
  );
};

export default Ingridients;
