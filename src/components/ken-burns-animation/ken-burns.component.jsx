import React from "react";
import "./ken-burns.styles.scss";
import { KenBurnText } from "./ken-burns-text.component";
import flatroof from "../../images/slideshow/flatroof.jpg";
import house_roof from "../../images/slideshow/house_roof.jpg";
import house from "../../images/slideshow/house.jpg";
import house2 from "../../images/slideshow/house2.jpg";
import legs from "../../images/slideshow/legs.jpg";
import policebuilding from "../../images/slideshow/policebuilding.jpg";
import siding from "../../images/slideshow/siding.jpg";

import { KenCircles } from "./ken-burns-circle.component";
export const KenBurns = () => {
  return (
    <div>
      <KenBurnText />
      <div className="slideshow">
        <div
          className="slideshow-image"
          style={{
            backgroundImage: `linear-gradient(to right bottom,rgba(113, 219, 196, 0.103),rgba(40, 180, 157, 0.549)), url(${house_roof})`
          }}
        />
        <div
          className="slideshow-image"
          style={{
            backgroundImage: `linear-gradient(to right bottom,rgba(113, 219, 196, 0.103),rgba(40, 180, 157, 0.549)), url(${flatroof})`
          }}
        />
        <div
          className="slideshow-image"
          style={{
            backgroundImage: `linear-gradient(to right bottom,rgba(113, 219, 196, 0.103),rgba(40, 180, 157, 0.549)), url(${house2})`
          }}
        />
        <div
          className="slideshow-image"
          style={{
            backgroundImage: `linear-gradient(to right bottom,rgba(113, 219, 196, 0.103),rgba(40, 180, 157, 0.549)), url(${legs})`
          }}
        />
        <div
          className="slideshow-image"
          style={{
            backgroundImage: `linear-gradient(to right bottom,rgba(113, 219, 196, 0.103),rgba(40, 180, 157, 0.549)), url(${siding})`
          }}
        />
        <div
          className="slideshow-image"
          style={{
            backgroundImage: `linear-gradient(to right bottom,rgba(113, 219, 196, 0.103),rgba(40, 180, 157, 0.549)), url(${house})`
          }}
        />
        <div
          className="slideshow-image"
          style={{
            backgroundImage: `linear-gradient(to right bottom,rgba(113, 219, 196, 0.103),rgba(40, 180, 157, 0.549)), url(${policebuilding})`
          }}
        />
      </div>

      <KenCircles />
    </div>
  );
};
export default KenBurns;
