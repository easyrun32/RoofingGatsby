import React from "react";
import "./metal.styles.scss";
import b from "../../images/steeproof/metal/b.jpg";
import b2 from "../../images/steeproof/metal/b2.jpg";
import h1 from "../../images/steeproof/metal/h1.jpg";
import h2 from "../../images/steeproof/metal/h2.jpg";
import n from "../../images/steeproof/metal/n.jpg";
import n2 from "../../images/steeproof/metal/n2.jpg";
import v1 from "../../images/steeproof/metal/v1.jpg";
import v2 from "../../images/steeproof/metal/v2.jpg";
import Fade from "react-reveal";
export const Metal = () => {
  return (
    <div className="metal">
      <div className="metal__title">Metal Roof </div>
      <div className="metal__description">
        Expensive. However the pay-off is a great-looking, high-performing roof
        that likely won't require repairs or replacement for upward of 50 years.
      </div>
      <div className="metal__container">
        <Fade bottom>
          <div>
            <img src={n2} alt="n2" className="metal__container__img" />
          </div>
          <div>
            <img src={n} alt="n" className="metal__container__img" />
          </div>
          <div className="metal__container__vertical">
            <img src={v1} alt="v1" className="metal__container__img" />
          </div>
          <div className="metal__container__horizontal">
            <img src={h2} alt="h2" className="metal__container__img" />
          </div>
          <div className="metal__container__vertical">
            <img src={v2} alt="v2" className="metal__container__img" />
          </div>
          <div className="metal__container__big">
            <img src={b2} alt="b2" className="metal__container__img" />
          </div>
          <div className="metal__container__horizontal">
            <img src={b} alt="b" className="metal__container__img" />
          </div>
          <div className="metal__container__horizontal">
            <img src={h1} alt="h1" className="metal__container__img" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Metal;
