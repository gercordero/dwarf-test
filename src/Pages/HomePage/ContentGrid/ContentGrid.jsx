import React from "react";
// Components
import SliderSection from "./SliderSection/SliderSection";
import StartOrderSection from "./StartOrderSection/StartOrderSection";
import FindOrderSection from "./FindOrderSection/FindOrderSection";
import ContentBoxSection from "./ContentBoxSection/ContentBoxSection";
// Styled components
import {
  StyledContentGrid,
  TopGrid,
  BottomGrid,
} from "./styles/ContentGrid.styles";

const ContentGrid = () => {
  return (
    <StyledContentGrid container>
      <TopGrid container>
        <SliderSection />
        <StartOrderSection />
      </TopGrid>
      <BottomGrid container>
        <FindOrderSection />
        <ContentBoxSection />
      </BottomGrid>
    </StyledContentGrid>
  );
};

export default ContentGrid;
