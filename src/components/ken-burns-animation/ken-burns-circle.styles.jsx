import styled from "styled-components";
export const CircleContainerBase = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  position: absolute;
  display: flex;
  top: 80%;
  left: 0%;
  width: 100%;
  height: 100px;
  /* transform: translate3d(-50%, -50%, 0); */
  z-index: 99;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const CircleContainer = styled(CircleContainerBase)`
  /* box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);*/

  visibility: ${props => (props.show ? "visible" : "hidden")};
  transition: all 600ms ${props => (props.show ? "ease-in" : "ease-out")};
  transform: ${props => (props.show ? "none" : "translate(0, 100%)")};

  animation: fadeIn ease 4s;
  -webkit-animation: fadeIn ease 4s;
  -moz-animation: fadeIn ease 4s;
  -o-animation: fadeIn ease 4s;
  -ms-animation: fadeIn ease 4s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const CircleSectionOne = styled.div`
  grid-area: 1 / 2 / 2 / 4;
`;
export const CircleSectionTwo = styled.div`
  grid-area: 1 / 5 / 2 / 8;
  margin-left: -2vw;
`;
export const CircleSectionThree = styled.div`
  grid-area: 1 / 9 / 2 / 11;
`;
export const Circle = styled.span`
  display: block;
  height: 93px;
  width: 93px;
  background-image: linear-gradient(
    -50deg,
    #8ae2d5 0%,
    rgba(211, 243, 211, 0.801) 100%
  );
  text-align: center;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  display: inline-block;
  align-content: center;
  align-items: center;
  img {
    height: 50px;
    -webkit-filter: invert(100%); /* Safari/Chrome */
    filter: invert(100%);
    position: relative;
    top: 20%;
  }
`;
export const CircleText = styled.div`
  color: white;
  margin-top: 20px;
`;
export const CircleTextSub = styled.div`
  color: white;
  font-size: 0.9vw;
`;
