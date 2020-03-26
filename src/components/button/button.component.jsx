import React from "react";
import "./button.styles.scss";
import { CustomButton } from "./button.styles";
export const Button = props => {
  return <CustomButton green>{props.children}</CustomButton>;
};
export default Button;
