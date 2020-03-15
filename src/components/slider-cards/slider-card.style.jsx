import styled from "styled-components";
export const SliderSquare = styled.div`
  /* border: solid 0.5px #555;*/

  box-shadow: 10px -10px 5px rgba(0, 0, 0, 0.055);
  -moz-box-shadow: 10px -10px 5px rgba(0, 0, 0, 0.082);
  -webkit-box-shadow: 10px -10px 5px rgba(0, 0, 0, 0.082);
  -o-box-shadow: 10px -10px 5px rgba(0, 0, 0, 0.055);

  text-align: center;
  margin-top: 10vh;
  border-radius: 25px;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  width: 60vw;
  padding: 20px;
  height: 50vh;
  font-size: 23px;

  background-image: linear-gradient(
    1deg,
    white 0%,
    rgba(211, 243, 211, 0.801) 100%
  );

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const LeftText = styled.div`
  grid-area: 6 / 1 / 7 / 2;
  text-align: left;
  img {
    width: 30px;
  }
`;
export const RightText = styled.div`
  grid-area: 6 / 5 / 7 / 6;
  display: flex;
  img {
    width: 20px;
  }
  text-align: left;
`;
export const MidText = styled.div`
  grid-area: 3 / 1 / 4 / 6;
`;
export const TopText = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  margin-top: -60px;
  margin-left: 2vw;
`;
export const SliderUserIcon = styled.div`
  position: relative;
  background: ${props => `url(${props.background}) no-repeat top center`};
  background-size: 100px 100px;
  object-fit: contain;
  border: 1px solid white;
  height: 100px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 100px;
`;
