import React from "react";
import { Background, TextTitle } from "./cards.styles";

import metal from "../../images/card/metalroof.jpg";
import shingle from "../../images/card/shingle.jpg";
import pvc from "../../images/card/pvc.jpg";

import "./cards.styles.scss";
import Fade from "react-reveal/Fade";
export const Cards = () => {
  return (
    <Background>
      <br />
      <Fade bottom>
        <TextTitle>WHAT MATERIALS WE USE</TextTitle>
      </Fade>
      <div className="flipcardgrid">
        <Fade bottom>
          <div className="flipcard1">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={shingle} alt="Avatar" className="flip-card-img" />
                  <div className="flipcard-image-overlay__text">COMPOSITE</div>
                </div>
                <div className="flip-card-back-shingle">
                  <div className="flip-card-text">
                    Composite shingles offer a wide variety of style and color
                    making them the most popular roofing material in the
                    country. The relatively low cost of composition shingles and
                    wide selection to choose from make composite roofing a great
                    option for every budget.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flipcard2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={pvc} alt="Avatar" className="flip-card-img" />
                  <div className="flipcard-image-overlay__text">PVC</div>
                </div>
                <div className="flip-card-back-pvc">
                  <div className="flip-card-text">
                    PVC roofing is a roofing membrane specifically engineered
                    for low slope and flat roofs. This flexible material is UV
                    reflective, strong, easy to maintain and completely
                    waterproof once it is installed, making PVC the best option
                    for low slope roofs.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flipcard3">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={metal} alt="Avatar" className="flip-card-img" />
                  <div className="flipcard-image-overlay__text">METAL</div>
                </div>
                <div className="flip-card-back-metal">
                  <div className="flip-card-text">
                    Metal roofing is a durable and long lasting material that
                    can be installed on steep or low slope roofs. The diverse
                    color choices and ease of maintenance make metal roofing an
                    ideal option for any home.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Background>
  );
};
export default Cards;
