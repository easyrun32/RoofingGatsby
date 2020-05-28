import React from "react";
import "./restore.styles.scss";
import Fade from "react-reveal/Fade";
export const Restore = () => {
  return (
    <div className="restore">
      <div className="restore__section1">
        <Fade bottom>
          <div className="restore__section1__text">
            <div className="restore__section1__text__title">
              ROOF RESTORATION
            </div>
            We restore roofs back to their original form where they were
            originally a waterproofing system
          </div>
        </Fade>
      </div>

      <div className="restore__section2">
        <div className="restore__section2__img"></div>
      </div>
      <div className="restore__section3">
        <div className="restore__section3__text">
          <Fade bottom>
            <div className="restore__section3__text__title">WATER PROOFING</div>
            <ul>
              <li>Metal Retro-fit Roof Systems</li>
              <li>Fluid-Applied Roof Systems: Acrylic </li>
              <li> Reflective Elastomeric Coatings | Polyurethane Coatings</li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Restore;
