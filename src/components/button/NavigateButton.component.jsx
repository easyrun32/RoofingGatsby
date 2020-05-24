import React from "react";
import { CustomButton } from "./button.styles";
export const NavigateButton = (props) => {
  return (
    <CustomButton
      onClick={() => (window.location.href = `/${props.route}`)}
      green
    >
      {props.children}
    </CustomButton>
  );
};

export default NavigateButton;
