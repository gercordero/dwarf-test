import React from "react";
// Styled components
import { StyledButton } from "./styles/SliderButtons.styles";
// React icons
import { GrFormPrevious } from "react-icons/gr";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <StyledButton {...props}>
    <GrFormPrevious style={{ color: "white" }} />
  </StyledButton>
);

export default SlickArrowLeft;
