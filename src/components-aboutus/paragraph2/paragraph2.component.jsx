import React from "react";
import "./paragraph2.styles.scss";
import Fade from "react-reveal/Fade";
export const Paragraph2 = () => {
  return (
    <div className="paragraph2">
      <div className="paragraph2-leftside">
        <div className="paragraph2-text">
          <Fade bottom>
            <div className="paragraph2-text__title">We are Professional</div>
            We have a fully operational sheet metal shop and the ability to
            custom fabricate components for any job. We have achieved GAF
            MasterElite Contractor status and are trained certified installers
            of Johns Manville, Carlisle SynTec, Firestone, Duro-Last and Tremco
            commercial roofing products. Our certifications allow us to offer
            the best warranties in the industry.
          </Fade>
        </div>
      </div>
      <div className="paragraph2-rightside">
        <div className="paragraph2-img"></div>
      </div>
    </div>
  );
};
export default Paragraph2;
