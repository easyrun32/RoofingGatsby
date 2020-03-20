import React, { useState } from "react";
import {
  CircleContainer,
  CircleSectionOne,
  CircleSectionTwo,
  CircleSectionThree,
  Circle,
  CircleText,
  CircleTextSub
} from "./ken-burns-circle.styles";
import trash from "../../images/circle-images/trash.svg";
import home from "../../images/circle-images/home.svg";
import sketch from "../../images/circle-images/sketch.svg";
//import Fade from "react-reveal/Fade";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
export const KenCircles = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  //const rendersCount = useRef(0);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -30 || prevPos.y < -30;
      //const isShow = currPos.y < -20;

      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );
  //circlecontainer has
  return (
    <div>
      <CircleContainer show={hideOnScroll}>
        <CircleSectionOne>
          <Circle>
            <img src={trash} alt="trash" />
          </Circle>
          <CircleText>Roof Cleaning</CircleText>
          <CircleTextSub>
            Moss & Debris Remove | Annual Maintenance
          </CircleTextSub>
        </CircleSectionOne>
        <CircleSectionTwo>
          <Circle>
            <img src={home} alt="home" />
          </Circle>
          <CircleText>Roof Replacment</CircleText>
          <CircleTextSub>Full Roof Replacement & Cleanup</CircleTextSub>
        </CircleSectionTwo>
        <CircleSectionThree>
          <Circle>
            <img src={sketch} alt="sketch" />
          </Circle>
          <CircleText>Other Services</CircleText>
          <CircleTextSub>Gutter | Skylights</CircleTextSub>
        </CircleSectionThree>
      </CircleContainer>
    </div>
  );
};
//  {/*
//   <div className="slideshow-section-circle">
//     <div className="slideshow-section-circle__1">
//       <span className="circle">
//         <img src={clean} alt="clean" className="circle__image" />
//       </span>
//       <div className="circle__text">Roof Replacment</div>
//       <div className="circle__text__sub">Full Roof Replacement & Cleanup</div>
//     </div>
//     <div className="slideshow-section-circle__2">
//       <span className="circle">
//         <img src={home} alt="home" className="circle__image" />
//       </span>
//       <div className="circle__text">Roof Cleaning</div>
//       <div className="circle__text__sub">
//         Moss & Debris Remove | Annual Maintenance
//       </div>
//     </div>
//     <div className="slideshow-section-circle__3">
//       <span className="circle">
//         <img src={sketch} alt="sketch" className="circle__image" />
//       </span>
//       <div className="circle__text">Other Services</div>
//       <div className="circle__text__sub">Gutter | Skylights</div>
//     </div>
//   </div>
//   */}
