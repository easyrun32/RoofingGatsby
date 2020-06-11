import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import "./header.styles.scss";
export const Header = () => {
  return (
    <div className="header">
      <CustomButton route={"about-us"} name={"who we are"} />
      <CustomButton route={"flat-roof"} name={"flat roofs"} />
      <CustomButton route={"steep-roof"} name={"steep roofs"} />
      <CustomButton route={"portfolio"} name={"Portfolio"} />
      <CustomButton route={"contact"} name={" contact us"} />
    </div>
  );
};
export default Header;
