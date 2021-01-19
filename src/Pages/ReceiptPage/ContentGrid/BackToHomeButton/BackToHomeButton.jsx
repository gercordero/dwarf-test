import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Redux actions
// Styled components
import {
  StyledGrid,
  ButtonContainer,
  StyledButton,
} from "./styles/BackToHomeButton.styles";

const BackToHomeButton = () => {
  // Redux state
  const dispatch = useDispatch();

  return (
    <StyledGrid item xs={12} sm={12} md={12}>
      <ButtonContainer>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={() => console.log("Hello")}
        >
          Back To Home
        </StyledButton>
      </ButtonContainer>
    </StyledGrid>
  );
};

export default BackToHomeButton;
