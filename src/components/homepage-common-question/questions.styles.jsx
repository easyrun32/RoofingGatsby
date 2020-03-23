import styled from "styled-components";
export const Divider = styled.div`
  margin-top: 20vw;
`;
export const Background = styled.div`
  /* position: relative;
  width: 100%; */
  height: 100vh;
  background-image: linear-gradient(
    -100deg,
    #bee9e48f 0%,
    rgba(242, 243, 242, 0.726) 100%
  );

  text-align: center;
  @media screen and (max-width: 500px) {
    height: 200vh;
  }
`;

export const TextContainer = styled.div`
  /* width: 150px; */
  @media screen and (max-width: 500px) {
    margin: auto;
    width: 70vw;
  }
`;

export const TextTitle = styled.div`
  text-align: center;

  font-weight: 600;
  font-size: 2.5vw;
  margin-top: 5vw;
  @media screen and (max-width: 500px) {
    position: relative;
    font-size: 10vw;
    margin-top: 20px;
  }
`;
export const Container = styled.div`
  margin-top: 10vw;
  margin-bottom: 10vw;
  @media screen and (max-width: 500px) {
    margin-top: 20vw;
    margin-bottom: 20vw;
  }
`;

export const Grid = styled.div`
  margin-top: 6vw;
  margin-bottom: -7vw;
  display: grid;
  grid-template-columns: 2fr repeat(5, 2fr) 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (max-width: 800px) {
    margin-top: 1vw;
    display: inline-block;
  }
`;
export const Left = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;
export const Middle = styled.div`
  grid-area: 1 / 4 / 2 / 5;
`;
export const Right = styled.div`
  grid-area: 1 / 6 / 2 / 7;
`;
