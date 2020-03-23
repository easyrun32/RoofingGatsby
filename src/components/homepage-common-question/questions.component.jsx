import React, { useLayoutEffect, useState } from "react";
import {
  Background,
  Divider,
  TextContainer,
  TextTitle,
  Grid,
  Left,
  Middle,
  Right
} from "./questions.styles";
import { CircleNumber } from "../circle-number/circle-number.component";

import Fade from "react-reveal/Fade";
function useWindowSize(defaultValue) {
  const [windowSize, setWindowSize] = useState({ innerWidth: defaultValue });

  useLayoutEffect(() => {
    setWindowSize({ innerWidth: window.innerWidth });
  }, []);

  return windowSize;
}

export const Questions = () => {
  const windowSize = useWindowSize(900);

  return (
    <Background>
      <br />
      <TextContainer>
        <TextTitle>COMMON ROOFING QUESTIONS</TextTitle>
      </TextContainer>

      {windowSize.innerWidth < 800 ? (
        <Fade bottom>
          <Divider />
          <CircleNumber>1</CircleNumber>
          <h2>When should i replace my roof?</h2>
          Roofs should be replaced around the 20 to 25-year mark. By this time,
          important materials begin to fail.
          <Divider />
          <CircleNumber>2</CircleNumber>
          <h2>What is the best type of roof?</h2>
          The most common options for new roofs include asphalt shingles and
          metal. Both types have pros and cons. If you’re looking for the most
          affordable option, shingles may be a good choice. If you’re looking
          for something modern and unique, a metal roof may be better.
          <Divider />
          <CircleNumber>3</CircleNumber>
          <h2>How much does a new roof cost?</h2>
          Roof size, pitch and materials are the three main factors that
          determine cost.
        </Fade>
      ) : (
        <Fade bottom>
          <Grid>
            <Left>
              <CircleNumber>1</CircleNumber>
              <h2>When should i replace my roof?</h2>
              Roofs should be replaced around the 20 to 25-year mark. By this
              time, important materials begin to fail.
            </Left>
            <Middle>
              <CircleNumber>2</CircleNumber>
              <h2>What is the best type of roof?</h2>
              The most common options for new roofs include asphalt shingles and
              metal. If you’re looking for the most affordable option, shingles
              may be a good choice. If you’re looking for something modern and
              unique, a metal roof may be better.
            </Middle>
            <Right>
              <CircleNumber>3</CircleNumber>
              <h2>How much does a new roof cost?</h2>
              Roof size, pitch and materials are the three main factors that
              determine cost.
            </Right>
          </Grid>
        </Fade>
      )}
    </Background>
  );
};
export default Questions;
