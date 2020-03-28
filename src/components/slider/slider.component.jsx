import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  SliderBackground,
  SliderContainer,
  SliderTitle,
  ContainerTitle
} from "./slider.styles";

import { SliderCard } from "../slider-cards/slider-card.component";
import woodbury from "../../images/user-icon/woodbury.jpg";
//import monroe from "../../images/user-icon/monroe.jpg";
import gaf from "../../images/socialmedia/gaf.png";
//import google from "../../images/socialmedia/google.svg";

export const PhotoSlider = () => {
  //documentation https://react-slick.neostack.com/docs/example/
  var settings = {
    adaptiveHeight: true,
    autoplay: true,
    infinite: true,
    lazyLoad: true,
    pauseOnHover: true,
    autoplaySpeed: 4200,
    arrows: false
  };
  //picture must all be the same width and height
  const users = [
    {
      backgroundIcon: woodbury,
      review: "Very professional and knowledgeable contractor",
      name: "P.L",
      stars_amount: 5,
      socialmedia: gaf
    },
    {
      backgroundIcon: woodbury,
      review:
        "are honest hard working professionals that gave a competitive estimate, arrived on the date scheduled and did a superior installation.The cleanup was so through! You wouldn't hardly notice that construction took place.",
      name: "R.P",
      stars_amount: 5,
      socialmedia: gaf
    },
    {
      backgroundIcon: woodbury,
      review: "Work was performed in a professional manner",
      name: "G.C",
      stars_amount: 5,
      socialmedia: gaf
    }
  ];

  return (
    <SliderBackground>
      <SliderContainer>
        <br />
        <SliderTitle>
          <ContainerTitle>REAL CUSTOMER REVIEWS</ContainerTitle>
        </SliderTitle>

        {/* Slider is not apart of styled components it's just a component from the library react-slick */}
        <Slider {...settings}>
          {users.map((user, index) => (
            <SliderCard key={index} {...user} />
          ))}
        </Slider>
      </SliderContainer>
    </SliderBackground>
  );
};

export default PhotoSlider;
