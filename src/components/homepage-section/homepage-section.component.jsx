import { CircleComponent } from "../circle/circle.component";
import {
  Background,
  Text,
  TextTitle,
  CircleContainer,
  CirclePictureContainer,
  SubTextContainer,
} from "./homepage-section.styles";

import Fade from "react-reveal/Fade";
import schedule from "../../images/circle-images/schedule.png";
import roofcolors from "../../images/circle-images/roofcolors.jpg";
import roofer from "../../images/circle-images/roofer.jpg";
import React from "react";
import { NavigateButton } from "../../components/button/NavigateButton.component";
// https://www.react-reveal.com/examples/

export const HomepageSection = () => {
  return (
    <Background>
      <TextTitle>THE FRANK STEVENS & SONS EXPERIENCE</TextTitle>
      <CircleContainer>
        <Fade bottom>
          <CirclePictureContainer>
            <CircleComponent image={schedule} />
            <SubTextContainer>
              <h2>Schedule</h2>
              <Text>We'll bring a roofer with 25 years of experience</Text>
            </SubTextContainer>
          </CirclePictureContainer>
          <CirclePictureContainer>
            <CircleComponent image={roofcolors} />
            <SubTextContainer>
              <h2>Pick Material Color</h2>
              <Text>Pick one of our beautiful colors</Text>
            </SubTextContainer>
          </CirclePictureContainer>
          <CirclePictureContainer>
            <CircleComponent image={roofer} />
            <SubTextContainer>
              <h2>Install New Roof</h2>
              <Text>We use Quality products </Text>
            </SubTextContainer>
          </CirclePictureContainer>
        </Fade>
      </CircleContainer>
      <NavigateButton route="steep-roof">Learn More</NavigateButton>
    </Background>
  );
};
