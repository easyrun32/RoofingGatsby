import styled from "styled-components";
export const Background = styled.div`
  background-image: linear-gradient(
    -100deg,
    #5586808f 0%,
    rgba(242, 243, 242, 0.726) 100%
  );
  padding: 50px;
`;

export const Image = styled.div`
  img {
    border-radius: 10px;
    object-fit: cover;
    height: 60vh;
    width: 20vw;
    @media screen and (max-width: 800px) {
      border-radius: 10px;

      height: 60vh;
      width: 50vw;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (max-width: 500px) {
      border-radius: 10px;
      height: 50vh;
      width: 75vw;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Title = styled.div`
  text-align: center;

  font-weight: 600;
  font-size: 3.6vw;
  /* margin-top: 5vw; */
  @media screen and (max-width: 500px) {
    position: relative;
    font-size: 11vw;
  }
`;
export const SubTitle = styled.div`
  text-align: center;

  font-weight: 100;
  font-size: 1.8vw;
  /* margin-top: 5vw; */
  margin-left: 4vw;
  margin-right: 4vw;
  margin-bottom: 6vh;
  @media screen and (max-width: 500px) {
    font-size: 5vw;
    margin-top: 20px;
  }
  @media screen and (max-width: 800px) {
    font-size: 3w;
    margin-top: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (max-width: 800px) {
    display: inline;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  @media screen and (max-width: 800px) {
    margin-top: 10vh;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  @media screen and (max-width: 800px) {
    margin-top: 10vh;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 6 / 2 / 7;
  @media screen and (max-width: 800px) {
    margin-top: 10vh;
  }
`;
