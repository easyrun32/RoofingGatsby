import styled from "styled-components";
import ontheroof from "../../images/backgroundimage/ontheroof.jpg";

export const ContactContainer = styled.div`
  height: 200px;
  background-size: cover;
  background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 50%
    ),
    url(${ontheroof});

  @media screen and (max-width: 800px) {
    height: 100%;

    background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.5) 100%,
        transparent 50%
      ),
      url(${ontheroof});
  }
`;
