import React from "react";
import {
  CircleNumberContainer,
  Circle1,
  Circle2,
  Circle3
} from "./circle-number.styles";
export const CircleNumber = props => {
  return (
    <CircleNumberContainer>
      <Circle1>
        <Circle2>
          <Circle3>{props.children}</Circle3>
        </Circle2>
      </Circle1>
    </CircleNumberContainer>
  );
};
