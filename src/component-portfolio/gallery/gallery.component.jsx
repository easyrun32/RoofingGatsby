import React from "react";
import "./gallery.styles.scss";
import b from "../../images/portfolio/gallery/1.png";
import b2 from "../../images/portfolio/gallery/2.png";
import h1 from "../../images/portfolio/gallery/3.png";
import h2 from "../../images/portfolio/gallery/4.png";
import n from "../../images/portfolio/gallery/5.png";
import n2 from "../../images/portfolio/gallery/6.png";
import v1 from "../../images/portfolio/gallery/7.png";
import v2 from "../../images/portfolio/gallery/8.png";
import a1 from "../../images/portfolio/gallery/9.png";
import a2 from "../../images/portfolio/gallery/10.png";
import a3 from "../../images/portfolio/gallery/11.png";
import a4 from "../../images/portfolio/gallery/12.png";
import a5 from "../../images/portfolio/gallery/13.png";
import a6 from "../../images/portfolio/gallery/14.png";
import a7 from "../../images/portfolio/gallery/15.png";
import Fade from "react-reveal";
export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__title">Gallery </div>
      <div className="gallery__description">Our work throughout the years</div>
      <div className="gallery__container">
        <Fade bottom>
          <div>
            <img src={n2} alt="n2" className="gallery__container__img" />
          </div>
          <div>
            <img src={n} alt="n" className="gallery__container__img" />
          </div>
          <div className="gallery__container__vertical">
            <img src={v1} alt="v1" className="gallery__container__img" />
          </div>
          <div className="gallery__container__horizontal">
            <img src={h2} alt="h2" className="gallery__container__img" />
          </div>
          <div className="gallery__container__vertical">
            <img src={v2} alt="v2" className="gallery__container__img" />
          </div>
          <div className="gallery__container__big">
            <img src={b2} alt="b2" className="gallery__container__img" />
          </div>
          <div className="gallery__container__horizontal">
            <img src={b} alt="b" className="gallery__container__img" />
          </div>
          <div className="gallery__container__horizontal">
            <img src={h1} alt="h1" className="gallery__container__img" />
          </div>
          {/*end */}
          <div>
            <img src={a1} alt="a1" className="gallery__container__img" />
          </div>
          <div>
            <img src={a2} alt="a2" className="gallery__container__img" />
          </div>
          <div className="gallery__container__vertical">
            <img src={a3} alt="a3" className="gallery__container__img" />
          </div>
          <div className="gallery__container__horizontal">
            <img src={a4} alt="a4" className="gallery__container__img" />
          </div>
          <div className="gallery__container__vertical">
            <img src={a5} alt="a5" className="gallery__container__img" />
          </div>
          <div className="gallery__container__big">
            <img src={a6} alt="a6" className="gallery__container__img" />
          </div>
          <div className="gallery__container__horizontal">
            <img src={a7} alt="a7" className="gallery__container__img" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Gallery;
