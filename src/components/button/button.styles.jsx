import styled, { css } from "styled-components";

export const CustomButton = styled.button`
  ${props =>
    props.green &&
    css`
      background-color: rgba(40, 180, 157, 0.549);
      color: white;

      &::after {
        background-color: rgba(40, 180, 157, 0.549);
      }
    `}

  margin-top: ${props => `${props.marginTop}px`};


  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem;
    display: inline-block;
    border-radius: 1rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.5vw;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 800px) {
      //left: 15%;
      font-size: 1rem;
      border-radius: 1rem;
      padding: 1.5vw;
    }
  }
  &:hover {
    box-shadow: 0 1rem 2rem rgba(black, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 11rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`;
