import React from "react";
import "./paragraph2.styles.scss";
import gaf from "../../images/aboutus/gaf.jpg";
export const Paragraph2 = () => {
  return (
    <div className="paragraph2">
      <div className="paragraph2__left-half">
        <article className="paragraph2__article">
          <div className="paragraph2__left-half__title">
            We are Professional
          </div>
          <p>
            We have a fully operational sheet metal shop and the ability to
            custom fabricate components for any job. We have achieved GAF
            MasterElite Contractor status and are trained certified installers
            of Johns Manville, Carlisle SynTec, Firestone, Duro-Last and Tremco
            commercial roofing products. Our certifications allow us to offer
            the best warranties in the industry.
          </p>
        </article>
      </div>

      <div className="paragraph2__right-half">
        <article className="paragraph2__article">
          <img className="paragraph2__church" src={gaf} alt="church" />
        </article>
      </div>
    </div>
  );
};
export default Paragraph2;
