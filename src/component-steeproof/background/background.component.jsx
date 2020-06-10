import React from "react";
import "./background.styles.scss";
import Typical from "react-typical";
//  cedar shakes , slate , metal roofing
//  and more!
/*https://www.producthunt.com/posts/react-typical */
export const Background = () => {
  return (
    <div className="steeproof-background">
      <div className="steeproof-background__container">
        <div className="steeproof-background__text">
          <div className="steeproof-background__text__title">Steep Roof</div>
          We are experienced installers of{" "}
          <Typical
            steps={[
              "slate",
              3000,
              "metal",
              3000,
              "real & flaux",
              3000,
              "standing seam",
              3000,
              "cedar shakes",
            ]}
            loop={Infinity}
            wrapper="p"
          />
          roofs
        </div>
      </div>
    </div>
  );
};

export default Background;
