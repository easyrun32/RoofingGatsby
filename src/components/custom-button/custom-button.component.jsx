import React from "react";
import { Link } from "gatsby";
import "./custom-button.styles.scss";
export const CustomButton = ({ name, route }) => (
  <Link to={`/${route}`} className="container">
    <div className="btn from-middle">{name}</div>
  </Link>
);

export default CustomButton;
