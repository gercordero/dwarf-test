import styled from "styled-components";
// Material UI
import Grid from "@material-ui/core/Grid";
// Slick slider
import Slider from "react-slick";

export const StyledGrid = styled(Grid)`
  height: 100%;
`;

export const StyledDiv = styled.div`
  text-align: center;
  outline: none;
  outline-color: unset;
  border: none;
`;

export const StyledTitle = styled.h2`
  color: white;
  text-transform: uppercase;
`;

export const StyledSlider = styled(Slider)`
  & {
    background-color: ${(props) => props.theme.palette.primary.main};
    padding: 1rem 0;
    outline: none;
    height: 100%;
  }

  img {
    border-radius: 50%;
  }

  .slick-list > .slick-track > .slick-slide > div {
    display: flex;
  }

  .slick-prev,
  .slick-next {
    height: 50px;
    width: 50px;
    color: white;
    z-index: 1;

    polyline {
      stroke: white;
    }
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }
`;

export const StyledImageContainer = styled.div`
  & {
    height: 80%;
    width: 60% !important;
    margin: 0 auto;
  }

  & img {
    height: 100%;
  }
`;
