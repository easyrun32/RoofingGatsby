import styled from "styled-components";

export const Background = styled.div`
  background-image: linear-gradient(
    -100deg,
    #bee9e48f 0%,
    rgba(242, 243, 242, 0.726) 100%
  );
  padding: 30px;
`;
export const TextTitle = styled.div`
  text-align: center;

  font-weight: 600;
  font-size: 2.5vw;
  /* margin-top: 5vw; */
  margin-bottom: 5vh;
  @media screen and (max-width: 500px) {
    position: relative;
    font-size: 10vw;
    margin-top: 20px;
  }
`;
