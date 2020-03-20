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
import { useState, useEffect } from "react";
// https://www.react-reveal.com/examples/

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  } else {
    return null;
  }
}
export const HomepageSection = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { width } = windowDimensions;
  return (
    <Background>
      <br />
      <TextTitle>THE FRANK STEVENS & SONS EXPERIENCE</TextTitle>
      {width < 800 ? (
        <Fade bottom>
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
