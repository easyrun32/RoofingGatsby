import styled from "styled-components";

export const Header = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  position: relative;

  height: 13vh;
  background-image: linear-gradient(
    -50deg,
    rgba(220, 238, 236, 0.560784),
    rgba(197, 235, 208, 0.726)
  );
  border-bottom: 1px solid rgba(112, 110, 110, 0.527);

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const HeaderLogo = styled.div`
  margin: auto;
  cursor: pointer;
  margin-left: 5vw;
  font-size: 3vw;
  grid-area: 1 / 1 / 4 / 4;
  a {
    text-decoration: none;
    color: black;
  }
`;
export const FancyText = styled.span`
  font-family: Tangerine;
`;
export const Text = styled.span`
  font-weight: 400;

  font-size: 2vw;
`;
export const HeaderMid = styled.div`
  margin: auto;

  position: relative;
  top: 5%;
  font-weight: 500;

  font-size: 2vw;
  grid-area: 1 / 4 / 2 / 7;
`;

export const HeaderQuote = styled.div`
  margin: auto;
  cursor: pointer;
  position: relative;
  top: 5%;
  font-size: 2vw;
  grid-area: 1 / 8 / 2 / 8;
  a {
    text-decoration: none;
    color: black;
  }
`;
