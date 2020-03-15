import React from "react";
import { Link } from "gatsby";
import {
  Header,
  HeaderLogo,
  HeaderMid,
  HeaderQuote,
  FancyText,
  Text
} from "./header.styles";

export const HeaderMain = () => {
  return (
    <Header>
      <HeaderLogo>
        <Link to="/">
          <FancyText>Frank Steven And Sons </FancyText>{" "}
          <Text className="div1__text2">Roofing Inc</Text>
        </Link>
      </HeaderLogo>

      <HeaderMid>
        <Text>GET THREE BIDS, JUST MAKE SURE ONE OF THEM IS US! </Text>
      </HeaderMid>

      <HeaderQuote>
        <Link to="/contact">GET A QUOTE</Link>
      </HeaderQuote>
    </Header>
  );
};
export default HeaderMain;
