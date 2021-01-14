import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Redux actions
import { getDishAction } from "../../../../../actions/dish-actions";
// Material UI
import Button from "@material-ui/core/Button";
// Styled Components
import { StyledDiv } from "./styles/GenerateNewDish.styles";

const GenerateNewDish = () => {
  const dispatch = useDispatch();

  return (
    <StyledDiv>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(getDishAction())}
      >
        Generate New
      </Button>
    </StyledDiv>
  );
};

export default GenerateNewDish;
