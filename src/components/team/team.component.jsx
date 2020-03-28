import React from "react";
import {
  Background,
  Grid,
  Div1,
  Div2,
  Div3,
  Image,
  Title,
  SubTitle
} from "./team.styles";
import pro1 from "../../images/team/pro1.png";
import pro2 from "../../images/team/pro2.jpg";
import pro3 from "../../images/team/pro3.jpg";
import Fade from "react-reveal/Fade";
export const Team = () => {
  return (
    <Background>
      <Fade bottom>
        <Title> MEET THE TEAM</Title>
        <SubTitle>
          Our roofers are skilled craftsmen who work for us year round. All
          crews are led by a Site Foreman who is a highly trained roofing expert
          that will be on your job from start to finish.
        </SubTitle>
      </Fade>
      <Grid>
        <Div1>
          <Image>
            <img src={pro2} alt="pro2" />
          </Image>
        </Div1>

        <Div2>
          <Image>
            <img src={pro1} alt="pro1" />
          </Image>
        </Div2>

        <Div3>
          <Image>
            <img src={pro3} alt="pro3" />
          </Image>
        </Div3>
      </Grid>
    </Background>
  );
};
export default Team;
