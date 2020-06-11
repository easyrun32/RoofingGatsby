import React from "react";
import "./navigation.styles.scss";
export const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__toggler" />

      <div className="navigation__hamburger">
        <div></div>
      </div>

      <div className="navigation__menu">
        <div>
          <div>
            <ul>
              <li>
                <a href="/">
                  <span className="navigation__spaner">01</span>Home Page
                </a>
              </li>
              <li>
                <a href="/about-us">
                  <span className="navigation__spaner">01</span>Who We Are
                </a>
              </li>
              <li>
                <a href="/flat-roof">
                  <span className="navigation__spaner">02</span>Flat Roof
                </a>
              </li>
              <li>
                <a href="/steep-roof">
                  <span className="navigation__spaner">03</span>Steep Roof
                </a>
              </li>
              <li>
                <a href="/portfolio">
                  <span className="navigation__spaner">04</span>Portfolio
                </a>
              </li>
              <li>
                <a href="/contact">
                  <span className="navigation__spaner">05</span>Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
