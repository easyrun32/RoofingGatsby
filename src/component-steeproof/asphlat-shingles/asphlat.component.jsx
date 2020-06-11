import React from "react";
import "./asphlat.styles.scss";
import h1 from "../../images/steeproof/h1.jpg";
import v1 from "../../images/steeproof/v1.jpg";
import h2 from "../../images/steeproof/h2.jpg";
import v2 from "../../images/steeproof/v2.jpg";
import n from "../../images/steeproof/n.jpg";
import v3 from "../../images/steeproof/v3.jpg";
import h3 from "../../images/steeproof/h3.jpg";
import h4 from "../../images/steeproof/h4.jpg";
import Fade from "react-reveal";
export const Asphlat = () => {
  return (
    <div className="asphlat">
      <div className="asphlat__title">Asphlat Shingle </div>
      <div className="asphlat__description">
        One of the most common roofing material used in NY Homes. It's cost
        effective, lays flat on the roof and it's easy to install!
      </div>
      <div className="asphlat__container">
        <Fade bottom>
          <div>
            <img src={h1} alt="h1" className="asphlat__container__img" />
          </div>
          <div>
            <img src={n} alt="n" className="asphlat__container__img" />
          </div>
          <div className="asphlat__container__vertical">
            <img src={v1} alt="v1" className="asphlat__container__img" />
          </div>
          <div className="asphlat__container__horizontal">
            <img src={h2} alt="h2" className="asphlat__container__img" />
          </div>
          <div className="asphlat__container__vertical">
            <img src={v2} alt="v2" className="asphlat__container__img" />
          </div>
          <div className="asphlat__container__big">
            <img src={v3} alt="v3" className="asphlat__container__img" />
          </div>
          <div className="asphlat__container__horizontal">
            <img src={h3} alt="h3" className="asphlat__container__img" />
          </div>
          <div className="asphlat__container__horizontal">
            <img src={h4} alt="h4" className="asphlat__container__img" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Asphlat;
