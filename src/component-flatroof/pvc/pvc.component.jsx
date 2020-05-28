import React from "react";
import "./pvc.styles.scss";
import Fade from "react-reveal/Fade";
export const PVC = () => {
  return (
    <div className="pvc">
      <div className="pvc__section1">
        <Fade bottom>
          <div className="pvc__section1__text">
            <div className="pvc__section1__text__title">
              SINGLE-PLY ROOF MEMBRANE SYSTEMS
            </div>
            PVC (Polyvinyl Chloride) is hands down the best low slope and flat
            roofing material on the market today. PVC membrane is . 060” thick
            white, polyester reinforced weldable roofing membrane with excellent
            welding characteristics. ...this roofing membrane is designed for
            all types of commercial and residential single-ply roof construction
            and re-roofing applications or repairs to existing PVC systems.
          </div>
        </Fade>
      </div>

      <div className="pvc__section2">
        <div className="pvc__section2__img"></div>
      </div>
      <div className="pvc__section3">
        <div className="pvc__section3__text">
          <Fade bottom>
            <div className="pvc__section3__text__title">PVC ROOFING</div>
            <ul>
              <li>
                EPDM Rubber Roof Membrane Systems: (Fully-adhered |
                Mechanically-Attached | Ballasted)
              </li>
              <li>
                TPO Roof Membrane Systems: (Fully-Adhered |
                Mechanically-Attached)
              </li>
              <li>Specially trained crews install every PVC roof</li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default PVC;
