import styled from "styled-components";
export const Divider = styled.div`
  margin-top: 20vw;
`;
export const Background = styled.div`
  /* position: relative;
  width: 100%; */
  /* height: 100vh; */
  background-image: linear-gradient(
    -100deg,
    #5586808f 0%,
    rgba(242, 243, 242, 0.726) 100%
  );
  @media screen and (max-width: 500px) {
    /* height: 200vh; */
  }
`;

export const CircleNumberContainer = styled.div`
  /* margin-top: 10vw; */
  padding: 2.5vw;
  @media screen and (max-width: 500px) {
    margin-bottom: 10vh;
  }
`;
export const CircleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 500px) {
    text-align: center;
    display: inline-block;
    margin: auto;
    display: inline-block;
    position: relative;
    width: 100%;
  }
`;

export const SubTextContainer = styled.div`
  text-align: center;
  width: 20vw;
  @media screen and (max-width: 500px) {
    margin: auto;
    width: 80vw;
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

  @media screen and (max-width: 500px) {
    position: relative;
    font-size: 10vw;
    margin-top: 20px;
  }
`;
export const Container = styled.div`
  /* margin-top: 10vw;
  margin-bottom: 5vw; */
  @media screen and (max-width: 500px) {
    margin-top: 20vw;
    margin-bottom: 20vw;
  }
`;
