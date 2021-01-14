import React from "react";
// Styled components
import { StyledButton } from "./styles/SliderButtons.styles";
// React icons
import { GrFormNext } from "react-icons/gr";

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <StyledButton {...props}>
    <GrFormNext />
  </StyledButton>
);

export default SlickArrowRight;
