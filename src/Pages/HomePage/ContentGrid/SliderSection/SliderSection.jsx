import React from "react";
// Components
import SlickArrowLeft from "./SliderButtons/SlickArrowLeft";
import SlickArrowRight from "./SliderButtons/SlickArrowRight";
// Styled components
import {
  StyledGrid,
  StyledDiv,
  StyledTitle,
  StyledSlider,
  StyledImageContainer,
} from "./styles/SliderSection.styles";
// Slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider settings
const settings = {
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};

const SliderSection = ({ dishes }) => {
  return (
    <StyledGrid item xs={12} sm={12} md={8}>
      <StyledSlider {...settings}>
        {dishes.map((dish) => (
          <StyledDiv key={dish.idMeal}>
            <StyledTitle>{dish.strMeal}</StyledTitle>
            <StyledImageContainer>
              <img
                src={dish.strMealThumb}
                alt={dish.strMeal}
                style={{ width: "100%", margin: "0 auto" }}
              />
            </StyledImageContainer>
          </StyledDiv>
        ))}
      </StyledSlider>
    </StyledGrid>
  );
};

export default SliderSection;
