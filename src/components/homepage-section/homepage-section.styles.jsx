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

export const SubTextContainer = styled.div`
  text-align: center;
  width: 20vw;
  @media screen and (max-width: 500px) {
    margin: auto;
    width: 40vw;
  }
`;

export const CirclePictureContainer = styled.div`
  margin-top: 10vw;
  margin-bottom: 10vw;
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
  margin-top: 2vw;
  @media screen and (max-width: 500px) {
    margin-top: 15vw;
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
