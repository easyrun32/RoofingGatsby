import React from "react";

import { CircleAnimation } from "./CircleAnimation.component";
import "./loader.styles.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import systemimg from "../../images/steeproof/system.png";
import gold from "../../images/steeproof/gold.png";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__title">FEATURES AND BENEFITS</div>

      <div className="loader__container">
        <div className="loader__lefthalf">
          <p className="loader__lefthalf__text">
            <span>
              Composition roofing is an excellent roof replacement option for
              Orange County Homes.
            </span>{" "}
            Composition shingles perform well and will pair with almost any
            style of home. Composition roof systems can last an upwards of 20 to
            30 years depending on the shingle installed and if routine
            maintenance is followed.
          </p>
        </div>
        <div className="loader__righthalf">
          <div className="loader__righthalf__number">
            <VisibilitySensor>
              {({ isVisible }) => {
                const number = isVisible ? 20 : 0;
                return <CountUp end={number} duration={10} />;
              }}
            </VisibilitySensor>
            <span>to</span>
            <VisibilitySensor>
              {({ isVisible }) => {
                const number = isVisible ? 30 : 0;
                return <CountUp end={number} duration={12} />;
              }}
            </VisibilitySensor>
            Years
          </div>
        </div>
      </div>
      <div className="loader__circle-container">
        <div className="loader__circle-container__left">
          <CircleAnimation
            img={systemimg}
            width={70}
            margin={-20}
            color={`rgba(62, 152, 199`}
          />
        </div>
        <div className="loader__circle-container__right">
          <p>
            GAF's Weather Stopper System Plus Warranty which includes: 100%
            Coverage for the first 50 years on material and the cost of labor to
            replace any defective material; Prorated coverage from years 51 and
            beyond at 20% This warranty is transferable once Please Note:
            Buildings other than single family residences have full coverage for
            the first 40 years, prorated at 20% from year 41 on This a warranty
            that covers defective material and the labor to replace it, only.
            This warranty does not cover errors in installation Workmanship.
          </p>
        </div>
      </div>
      <div className="loader__circle-container-reverse">
        <div className="loader__circle-container-reverse__left">
          <CircleAnimation
            img={gold}
            width={50}
            margin={10}
            color={`rgba(218,165,32`}
          />
        </div>
        <div className="loader__circle-container-reverse__right">
          100% Coverage for the first 50 years on material and the cost of labor
          to replace any defective material; Prorated coverage from years 51 and
          beyond at 20% 100% Coverage for the first 25 years on workmanship on
          all installed GAF products. Following Frank Stevens & Sons'
          registration of your “Golden Pledge” Warranty, a GAF Field Inspector
          will come to your property and visually inspect all work to certify it
          meets “Golden Pledge” standards and create a punch-list of required
          corrections we must remedy if any aspect does not. Please Note:
          Buildings other than single family residences have full coverage for
          the first 40 years, prorated at 20% from year 41 on, and 100% coverage
          for the first 20 years on all Workmanship
        </div>
      </div>
    </div>
  );
};

export default Loader;
