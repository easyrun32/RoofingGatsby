import React from "react";
import "./credits.styles.scss";
import Fade from "react-reveal/Fade";
export const Credits = () => {
  return (
    <div className="flatroof-credits">
      <Fade bottom>
        <div className="flatroof-credits__mobile">
          We Work With the best brands!
        </div>
      </Fade>
      <div className="flatroof-credits__certified">
        <Fade bottom>
          <div className="flatroof-credits__certified__img image1"></div>

          <div className="flatroof-credits__certified__img image2"></div>
          <div className="flatroof-credits__certified__img image3"></div>
          <div className="flatroof-credits__certified__img image4"></div>
          <div className="flatroof-credits__certified__img image5"></div>
        </Fade>
      </div>
      <div className="flatroof-credits__text">
        <Fade bottom>
          <div className="flatroof-credits__text__subtext">
            As long-standing trained installers, licensed and certified with the
            following roofing system manufacturers, we are able to offer the
            very best manufacturer-backed, NDL (No-Dollar-Limit) warranties in
            the industry, ranging up to 30 years
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Credits;
