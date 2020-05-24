import React from "react";

import "./footer.styles.scss";
import phone from "../../images/footer/phone.png";
import mail from "../../images/footer/mail.png";
import credit1 from "../../images/credit/credit1.png";
import credit2 from "../../images/credit/credit2.png";
import credit3 from "../../images/credit/credit3.png";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
export const Footer = () => {
  return (
    <div className="footerbackground">
      <div className="footercontainer">
        <div className="footersection1">
          <Fade bottom>
            <div className="footersection1__title">
              Frank Steven and Sons Roofing
            </div>
            <div className="footersection1__aboutus">About us</div>
            <div className="footersection1__aboutus__info">
              With over 50 years of experience we've been providing Orange
              County with the best roof repair and roof replacement.
            </div>
          </Fade>
          <div className="footersection1__contact">Contact</div>
          <div className="footersection1__phone">
            <img
              className="footersection1__phone__img"
              src={phone}
              alt="phone"
            />
            <a href="tel:8459999999">845-999-9999</a>
          </div>
          <div className="footersection1__phone">
            <img
              className="footersection1__phone__img"
              src={mail}
              alt="phone"
            />
            <a href="mailto:someemail@gmail.com">test@gmail.com</a>
          </div>
        </div>
        <div className="footersection2">
          <div className="footersection2__information">Information</div>
          <div className="footersection2__section">
            <Link to="about-us">Who We Are</Link>
          </div>
          <div className="footersection2__section">
            <Link to="flat-roof">Flat Roof</Link>
          </div>
          <div className="footersection2__section">
            <Link to="steep-roof">Steep Roof</Link>
          </div>
          <div className="footersection2__section">
            <Link to="education"> Education Center</Link>
          </div>
          <div className="footersection2__section">
            <Link to="contact">Contact Us</Link>
          </div>
        </div>
        <div className="footersection3">
          <div className="footersection3__helpful">Helpful Links</div>
          <div className="footersection3__link">
            <a href="https://www.greatdayimprovements.com/10-roofing-maintenance-tips.aspx">
              {" "}
              Maintenance
            </a>
          </div>

          <div className="footersection3__link">
            <a href="https://www.google.com/search?q=types+of+shingles&source=lmns&bih=588&biw=1280&hl=en&ved=2ahUKEwjF--6a37TpAhVHHN8KHfWeBjYQ_AUoAHoECAEQAA">
              {" "}
              Types Of Shingles
            </a>
          </div>

          <div className="footersection3__link">
            <a href="https://www.google.com/search?bih=588&biw=1280&hl=en&sxsrf=ALeKk00v8Xwrm4Os9i0Xh7NWEO2lJgrP2A%3A1589507135196&ei=P_S9XsHIC7LJ1QHhzZCoDg&q=tips+about+replacing+roof&oq=tips+about+replacing+roof&gs_lcp=CgZwc3ktYWIQAzIICCEQFhAdEB46BAgAEEc6BwgjEOoCECc6BAgjECc6BAgAEEM6BQgAEIMBOgIIADoFCAAQkQI6BwgAEBQQhwI6BggAEBYQHjoFCCEQoAE6BQghEKsCUIbGAVjGgQJg_oICaANwAXgAgAGRAYgBnBCSAQQyMy40mAEAoAEBqgEHZ3dzLXdperABCg&sclient=psy-ab&ved=0ahUKEwiB5KTB37TpAhWyZDUKHeEmBOUQ4dUDCAw&uact=5">
              {" "}
              Tips about Roofing
            </a>
          </div>
        </div>
        <div className="footersection4">
          <Fade bottom>
            <div className="footersection4__credit">Credibility</div>
            <img src={credit1} alt="credit1" />
            <img src={credit2} alt="credit2" />
            <img src={credit3} alt="credit3" />
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Footer;
