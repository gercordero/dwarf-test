import React from "react";
// Styled components
import {
  StyledGrid,
  ButtonContainer,
  StyledButton,
} from "./styles/BackToHomeButton.styles";

const BackToHomeButton = () => {
  return (
    <StyledGrid item xs={12} sm={12} md={12}>
      <ButtonContainer>
        <StyledButton variant="contained" color="primary">
          Back To Home
        </StyledButton>
      </ButtonContainer>
    </StyledGrid>
  );
};

export default BackToHomeButton;
