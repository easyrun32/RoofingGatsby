import React from "react";
import aboutus from "../../images/aboutus/aboutus.jpg";
import "./background.scss";
export const Background = () => {
  return (
    <div className="aboutus">
      <img className="aboutus__img" src={aboutus} alt="aboutus" />
      <div className="aboutus__img__textblock">
        <p>Who We Are</p>
      </div>
    </div>
  );
};

export default Background;
