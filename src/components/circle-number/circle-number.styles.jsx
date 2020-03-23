import styled from "styled-components";

export const CircleNumberContainer = styled.div`
  /* max-width: 65px;
  margin: 40px 0% 0px 43%; */
  position: relative;
  width: 100%;

  padding: 0em;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 600;
  line-height: 2;
  letter-spacing: 0em;
  text-align: center;
  text-transform: none;
  /* background-image: linear-gradient(
    -50deg,
    #8ae2d5 0%,
    rgba(211, 243, 211, 0.801) 100%
  ); */
  color: rgb(255, 255, 255);

  background-color: transparent;
`;

export const Circle1 = styled.div`
  margin: auto;
  /* background: rgba(159, 39, 60, 0.25); */
  background-image: linear-gradient(
    -50deg,
    #8ae2d5 0%,
    rgba(211, 243, 211, 0.801) 100%
  );
  border-radius: 50%;
  height: 66px;
  width: 66px;
  position: relative;
`;
export const Circle2 = styled.div`
  position: absolute;
  /* background: rgba(159, 39, 60, 0.5); */
  background-image: linear-gradient(
    -50deg,
    #8ae2d5 0%,
    rgba(150, 200, 200, 0.5) 100%
  );
  border-radius: 50%;
  height: 56px;
  width: 56px;
  top: 50%;
  left: 50%;
  margin: -28px 0px 0px -28px;
`;

export const Circle3 = styled.div`
  position: absolute;
  /* background: rgb(159, 39, 60); */
  background-image: linear-gradient(
    -50deg,
    #8ae2d5 0%,
    rgba(100, 200, 200) 100%
  );
  border-radius: 50%;
  height: 46px;
  width: 46px;
  top: 50%;
  left: 50%;
  margin: -23px 0px 0px -23px;
`;
