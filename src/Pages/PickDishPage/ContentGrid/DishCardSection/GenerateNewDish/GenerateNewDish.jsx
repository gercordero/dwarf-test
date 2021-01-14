import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Redux actions
import { getDishAction } from "../../../../../actions/dish-actions";
// Styled Components
import { StyledDiv, StyledButton } from "./styles/GenerateNewDish.styles";

const GenerateNewDish = () => {
  const dispatch = useDispatch();

  return (
    <StyledDiv>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => dispatch(getDishAction())}
      >
        Generate New Dish
      </StyledButton>
    </StyledDiv>
  );
};

export default GenerateNewDish;
