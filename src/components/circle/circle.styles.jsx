import styled from "styled-components";

export const Circle = styled.div`
  margin: auto;
  background: ${props => `url(${props.background}) no-repeat top center`};
  background-size: 180px 180px;
  object-fit: contain;
  border: 5px solid white;
  height: 180px;
  width: 180px;

  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;

  @media screen and (max-width: 800px) {
    background-size: 150px 150px;
    height: 150px;
    width: 150px;
  }
`;
