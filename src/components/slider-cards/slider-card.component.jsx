import React from "react";
import {
  SliderSquare,
  LeftText,
  RightText,
  MidText,
  TopText,
  SliderUserIcon
} from "./slider-card.style";
import star from "../../images/socialmedia/star1.svg";
export const SliderCard = ({
  backgroundIcon,
  review,
  name,
  socialmedia,
  stars_amount
}) => {
  let stars = [];
  for (let i = 0; i < stars_amount; ++i) {
    stars.push(<img src={star} alt="star" key={i} />);
  }

  return (
    <SliderSquare>
      <LeftText>
        {name}
        <br />
        <img src={socialmedia} alt="socialmedia" />
      </LeftText>

      <RightText>{stars}</RightText>
      <MidText>{review}</MidText>
      <TopText>
        <SliderUserIcon background={backgroundIcon} />
      </TopText>
    </SliderSquare>
  );
};
export default SliderCard;
