import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderBackground, SliderContainer } from "./slider.styles";

import { SliderCard } from "../slider-cards/slider-card.component";
import woodbury from "../../images/user-icon/woodbury.jpg";
import monroe from "../../images/user-icon/monroe.jpg";
import gaf from "../../images/socialmedia/gaf.png";
import google from "../../images/socialmedia/google.svg";

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

  const users = [
    {
      backgroundIcon: woodbury,
      review:
        "lorem essssssslorem essssssslorem essssssslorem essssssslorem" +
        "essssssslorem essssssslorem essssssslorem essssssslorem esssssss",
      name: "bryan",
      stars_amount: 3,
      socialmedia: gaf
    },
    {
      backgroundIcon: monroe,
      review:
        "wow this is a great company" +
        "essssssslorem essssssslorem essssssslorem essssssslorem esssssss",
      name: "Camerin",
      stars_amount: 5,
      socialmedia: google
    }
  ];
  /*
   {
      backgroundIcon: monroe,
      review:
        "wow this is a great company" +
        "essssssslorem essssssslorem essssssslorem essssssslorem esssssss",
      name: "Camerin",
      stars_amount: 5,
      socialmedia: google
    }
  */
  return (
    <SliderBackground>
      <SliderContainer>
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
