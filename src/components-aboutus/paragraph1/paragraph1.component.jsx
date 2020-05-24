import React from "react";
import "./paragraph1.styles.scss";

export const Paragraph1 = () => {
  return (
    <div className="paragraph1">
      <div className="paragraph1-leftside">
        <div className="paragraph1-text">
          <div className="paragraph1-text__title">Where it began</div>
          Frank Stevens began roofing in Central Valley, New York in 1960 at the
          age of 18 for Jones Brothers, a roofing and plumbing company started
          in the late 1800s. In 1973, he opened Frank Stevens Roofing and went
          on to incorporate in 1999 as Frank Stevens & Sons Roofing, Inc. We are
          family-owned and operated specializing in the replacement, repair,
          restoration and maintenance of commercial, industrial, institutional
          and residential roofing systems on low-slope and steep slope roofs,
          including built-up hot tar systems, single-ply membranes (EPDM Rubber,
          TPO & PVC), asphalt shingles, real and imitation slate, cedar shake
          shingles and metal roofing (standing seam panel and metal shingles)
        </div>
      </div>
      <div className="paragraph1-rightside">
        <div className="paragraph1-img"></div>
      </div>
    </div>
  );
};
export default Paragraph1;
