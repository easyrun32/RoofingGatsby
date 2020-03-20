import React from "react";
import "./button.styles.scss";
export const Button = props => {
  return (
    <button className="submit submit--green" type="submit" value="send">
      {props.children}
    </button>
  );
};
export default Button;
