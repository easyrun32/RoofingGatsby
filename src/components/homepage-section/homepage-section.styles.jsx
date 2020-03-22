import styled from "styled-components";
export const Background = styled.div`
  /* position: relative;
  width: 100%; */

  background-image: linear-gradient(
    -100deg,
    #bee9e48f 0%,
    rgba(242, 243, 242, 0.726) 100%
  );

  text-align: center;
`;
export const Grid = styled.div`
  margin-top: -6vw;
  margin-bottom: -7vw;
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr) 2fr;
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
export const Container = styled.div`
  margin-top: 10vw;
  margin-bottom: 10vw;
  @media screen and (max-width: 500px) {
    margin-top: 20vw;
    margin-bottom: 20vw;
  }
`;

export const TextTitle = styled.div`
  font-size: 3vw;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: 8vw;
  }
`;
export const Text = styled.div`
  /* width: 10vw;
  word-wrap: break-word; */
`;
export const HomePageSection_Container = styled.div`
  /* width: 200px;
  display: block;
  position: relative;
  float: none;
  margin: 0 auto; */
`;
