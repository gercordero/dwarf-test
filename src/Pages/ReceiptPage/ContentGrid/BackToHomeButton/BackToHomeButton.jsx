import React from "react";
// React router
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
// Redux actions
import { resetAction } from "../../../../actions";
// Styled components
import {
  StyledGrid,
  ButtonContainer,
  StyledButton,
} from "./styles/BackToHomeButton.styles";

const BackToHomeButton = () => {
  // Redux state
  const dispatch = useDispatch();

  // Use history
  let history = useHistory();

  const handleClick = () => {
    dispatch(resetAction());
    history.push("/");
  };

  return (
    <StyledGrid item xs={12} sm={12} md={12}>
      <ButtonContainer>
        <StyledButton variant="contained" color="primary" onClick={handleClick}>
          Back To Home
        </StyledButton>
      </ButtonContainer>
    </StyledGrid>
  );
};

export default BackToHomeButton;
