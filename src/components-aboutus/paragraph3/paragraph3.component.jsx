import React from "react";
import "./paragraph3.styles.scss";
import roofer from "../../images/aboutus/roofer.jpg";
export const Paragraph3 = () => {
  return (
    <div className="paragraph3">
      <div className="paragraph3__left-half">
        <article className="paragraph3__article">
          <div className="paragraph3__left-half__title">We Are Experienced</div>
          <p>
            In our 40+ years in business we have completed numerous public and
            private projects ranging from schools, medical centers, correctional
            facilities, town halls, museums, libraries, airport hangars,
            military structures, retail stores, factories, warehouses, nursing
            homes, senior centers, sewer plants, architect's offices, places of
            worship, banks, firehouses, and of course residences- big and small.
            Our vast experience has made us exceptional at diagnosing and
            eliminating roof leaks. We've had long-standing maintenance
            contracts with several school districts and counties. We take
            genuine pride in our work and stand behind it, with a commitment to
            honesty, quality and safety. We are bonded and insured by an A+
            rated insurance policy to perform commercial and residential
            roofing.
          </p>
        </article>
      </div>

      <div className="paragraph3__right-half">
        <article className="paragraph3__article">
          <img className="paragraph3__church" src={roofer} alt="roofer" />
        </article>
      </div>
    </div>
  );
};
export default Paragraph3;
