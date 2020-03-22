import styled from "styled-components";

export const SliderBackground = styled.div`
  height: 80vh;
  -webkit-user-select: none;
  user-select: none;
  background-image: linear-gradient(
    -50deg,
    #bee9e48f 0%,
    rgba(242, 243, 242, 0.726) 100%
  );
  @media screen and (max-width: 800px) {
    height: 70vh;
  }
`;

export const ContainerTitle = styled.div`
  /* width: 150px; */
  @media screen and (max-width: 500px) {
    margin: auto;
    width: 70vw;
  }
`;
export const SliderTitle = styled.div`
  text-align: center;

  font-weight: 600;
  font-size: 2.5vw;
  @media screen and (max-width: 500px) {
    position: relative;
    font-size: 10vw;
    margin-top: 20px;
  }
`;

export const SliderContainer = styled.div`
  height: 70vh;

  -webkit-user-select: none;
  user-select: none;
`;
