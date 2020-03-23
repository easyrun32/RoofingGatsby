import { CircleComponent } from "../circle/circle.component";
import {
  Background,
  Container,
  Text,
  Grid,
  Left,
  Middle,
  Right,
  TextTitle
} from "./homepage-section.styles";
import { Button } from "../button/button.component";
import Fade from "react-reveal/Fade";
import schedule from "../../images/circle-images/schedule.png";
import roofcolors from "../../images/circle-images/roofcolors.jpg";
import roofer from "../../images/circle-images/roofer.jpg";
import React from "react";
import { useState, useLayoutEffect } from "react";
// https://www.react-reveal.com/examples/

function useWindowSize(defaultValue) {
  const [windowSize, setWindowSize] = useState({ innerWidth: defaultValue });

  useLayoutEffect(() => {
    setWindowSize({ innerWidth: window.innerWidth });
  }, []);

  return windowSize;
}
export const HomepageSection = () => {
  const windowSize = useWindowSize(900);

  /*
container
left 
middle 
right
*/
  return (
    <Background>
      <br />
      <TextTitle>THE FRANK STEVENS & SONS EXPERIENCE</TextTitle>
      {windowSize.innerWidth < 800 ? (
        <Fade bottom>
          {/* For big screen size*/}
          <Container>
            <CircleComponent image={schedule} />
            <h2>Schedule</h2>
            <Text>We'll bring a roofer with 25 years of experience</Text>
          </Container>

          <Container>
            <CircleComponent image={roofcolors} />
            <h2>Pick Material Color</h2>
            <Text>Pick one of our beautiful colors</Text>
          </Container>

          <Container>
            <CircleComponent image={roofer} />
            <h2>Install New Roof</h2>
            <Text>We use Quality products </Text>
          </Container>

          <Button>Learn More</Button>
        </Fade>
      ) : (
        <Fade bottom>
          {/*For big screen size */}
          <Grid>
            <Left>
              <Container>
                <CircleComponent image={schedule} />
                <h2>Schedule</h2>
                <Text>We'll bring a roofer with 25 years of experience</Text>
              </Container>
            </Left>
            <Middle>
              <Container>
                <CircleComponent image={roofcolors} />
                <h2>Pick Material Color</h2>
                <Text>Pick one of our beautiful colors</Text>
              </Container>
            </Middle>
            <Right>
              <Container>
                <CircleComponent image={roofer} />
                <h2>Install New Roof</h2>
                <Text>We use Quality products </Text>
              </Container>
            </Right>
          </Grid>

          <Button>Learn More</Button>
        </Fade>
      )}
    </Background>
  );
};
