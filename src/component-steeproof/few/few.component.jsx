import React from "react";
import "./few.styles.scss";

export const Few = () => {
  return (
    <div className="few">
      <div className="few__title">We Are One In A Few</div>
      <div className="few__container">
        <div className="few__left">
          <p className="few__left__text">
            we have earned the distinction of being certified as one of the
            select few GAF MasterElite Roofing Contractors for the installation
            of asphalt shingles.
          </p>
        </div>
        <div className="few__right">
          <div className="few__img"></div>
        </div>
      </div>
    </div>
  );
};

export default Few;
