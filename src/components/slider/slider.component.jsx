import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  SliderBackground,
  SliderContainer,
  SliderTitle,
  ContainerTitle,
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
    arrows: false,
  };
  //picture must all be the same width and height

  const users = [
    {
      backgroundIcon: woodbury,
      review:
        "Our experience was great and I recommend this company with no hesitation. The scope of work was thoroughly explained up front and everything went accordingly. Cleanup was quite good, which was important to us. There’s a reason this company is one of the best in Orange County  and I’m glad we went with them. Pricing was very fair given other quotes we got.",
      name: "P.L",
      stars_amount: 5,
      socialmedia: gaf,
    },
    {
      backgroundIcon: woodbury,
      review:
        "Jim headed the project and he and his crew worked in rainy, windy conditions. But they still managed to complete the job when they said they would. All was cleaned up and they were in and out without incident. We have since weathered several more rainy windy days with no leaks! If you want the best price provided by a good local company, there’s Frank Steven And Sons Roofing. I appreciate the work they did and the price they gave me.",
      name: "B.A",
      stars_amount: 5,
      socialmedia: gaf,
    },
    {
      backgroundIcon: woodbury,
      review:
        "are honest hard working professionals that gave a competitive estimate, arrived on the date scheduled and did a superior installation.The cleanup was so through! You wouldn't hardly notice that construction took place.",
      name: "R.P",
      stars_amount: 4,
      socialmedia: gaf,
    },
    {
      backgroundIcon: woodbury,
      review: "Work was performed in a professional manner",
      name: "G.C",
      stars_amount: 5,
      socialmedia: gaf,
    },
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
