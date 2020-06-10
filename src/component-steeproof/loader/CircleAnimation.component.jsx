import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import VisibilitySensor from "react-visibility-sensor";

/*
The Circle Details and Part of the circle itself
*/
function Example(props) {
  return (
    <div>
      <div>
        <div className="children">{props.children}</div>
        {/* 
        <div className="children__divtext">
          <h3 className="children__h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
        */}
      </div>
    </div>
  );
}

export const CircleAnimation = (props) => {
  return (
    <Example label="Covered">
      <VisibilitySensor>
        {({ isVisible }) => {
          const percentage = isVisible ? 100 : 0;
          return (
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={percentage}
              duration={2}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbarWithChildren
                    value={value}
                    /* This is important to include, because if you're fully managing the
          animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({
                      pathTransition: "none",
                      pathColor: `${props.color}, ${percentage / 100})`,
                    })}
                  >
                    <img
                      style={{ width: props.width + "%" }}
                      src={props.img}
                      alt="doge"
                    />
                    <div
                      className="circle-text"
                      style={{ marginTop: props.margin + "px" }}
                    >
                      <strong>{roundedValue}</strong>%
                    </div>
                  </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider>
          );
        }}
      </VisibilitySensor>
    </Example>
  );
  /* pathColor: `${props.color}, ${percentage / 100})`*/
};

export default CircleAnimation;
