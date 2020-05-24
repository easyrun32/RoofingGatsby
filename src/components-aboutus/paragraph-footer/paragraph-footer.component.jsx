import React from "react";
import "./paragraph-footer.styles.scss";
import { NavigateButton } from "../../components/button/NavigateButton.component";

export const ParagraphFooter = () => {
  return (
    <div className="paragraph-footer">
      We sincerely appreciate your considering us for your roofing needs and are
      committed to meeting your high expectations as well as our own.
      <br />
      <br />
      <NavigateButton route="contact">Contact Us</NavigateButton>
    </div>
  );
};

export default ParagraphFooter;
