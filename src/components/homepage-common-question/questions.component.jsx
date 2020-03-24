import React from "react";
import {
  Background,
  TextContainer,
  TextTitle,
  SubTextContainer,
  CircleContainer,
  CircleNumberContainer
} from "./questions.styles";
import { CircleNumber } from "../circle-number/circle-number.component";

import Fade from "react-reveal/Fade";

export const Questions = () => {
  return (
    <Background>
      <br />
      <Fade bottom>
        <TextContainer>
          <TextTitle>COMMON ROOFING QUESTIONS</TextTitle>
        </TextContainer>
      </Fade>
      <CircleContainer>
        <Fade bottom>
          <CircleNumberContainer>
            <CircleNumber>1</CircleNumber>
            <SubTextContainer>
              <h2>When should i replace my roof?</h2>
              Roofs should be replaced around the 20 to 25-year mark. By this
              time, important materials begin to fail.
            </SubTextContainer>
          </CircleNumberContainer>
          <CircleNumberContainer>
            <CircleNumber>2</CircleNumber>
            <SubTextContainer>
              <h2>What is the best type of roof?</h2>
              The most common options for new roofs include asphalt shingles and
              metal. If you’re looking for the most affordable option, shingles
              may be a good choice. If you’re looking for something modern and
              unique, a metal roof may be better.
            </SubTextContainer>
          </CircleNumberContainer>
          <CircleNumberContainer>
            <CircleNumber>3</CircleNumber>
            <SubTextContainer>
              <h2>How much does a new roof cost?</h2>
              Roof size, pitch and materials are the three main factors that
              determine cost.
            </SubTextContainer>
          </CircleNumberContainer>
        </Fade>
      </CircleContainer>
    </Background>
  );
};
export default Questions;
