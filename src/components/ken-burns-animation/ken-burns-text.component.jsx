import React from "react";
import { Phone } from "../phone/phone.component";
/*
 <span className="heading-primary--phone">
          <br />
          1-845-928-2161
        </span>
*/
export const KenBurnText = () => {
  return (
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Frank Stevens</span>
        <span className="heading-primary--main">and</span>
        <span className="heading-primary--main">Sons Roofing Inc</span>
        <span className="heading-primary--sub">Served for over 50 years</span>
        1-845-928-2161
      </h1>

      <Phone />
    </div>
  );
};

export default KenBurnText;
