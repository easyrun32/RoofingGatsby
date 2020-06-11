import React from "react";
import "./slate.styles.scss";
import b from "../../images/steeproof/slate/b.jpg";
import b2 from "../../images/steeproof/slate/b2.jpg";
import h1 from "../../images/steeproof/slate/h1.jpg";
import h2 from "../../images/steeproof/slate/h2.jpg";
import n from "../../images/steeproof/slate/n.jpg";
import n2 from "../../images/steeproof/slate/n2.jpg";
import v1 from "../../images/steeproof/slate/v1.jpg";
import v2 from "../../images/steeproof/slate/v2.jpg";
import Fade from "react-reveal";
export const Slate = () => {
  return (
    <div className="slate">
      <div className="slate__title">Slate Roof </div>
      <div className="slate__description">
        Slate is one of the longest-lasting roofing options available on today's
        market. In fact, slate shingles can last as long as 200 years in
        favorable environments. ... As a hard stone, slate will not absorb water
        or become warped from exposure to moisture.
      </div>
      <div className="slate__container">
        <Fade bottom>
          <div>
            <img src={n2} alt="n2" className="slate__container__img" />
          </div>
          <div>
            <img src={n} alt="n" className="slate__container__img" />
          </div>
          <div className="slate__container__vertical">
            <img src={v1} alt="v1" className="slate__container__img" />
          </div>
          <div className="slate__container__horizontal">
            <img src={h2} alt="h2" className="slate__container__img" />
          </div>
          <div className="slate__container__vertical">
            <img src={v2} alt="v2" className="slate__container__img" />
          </div>
          <div className="slate__container__big">
            <img src={b2} alt="b2" className="slate__container__img" />
          </div>
          <div className="slate__container__horizontal">
            <img src={b} alt="b" className="slate__container__img" />
          </div>
          <div className="slate__container__horizontal">
            <img src={h1} alt="h1" className="slate__container__img" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Slate;
