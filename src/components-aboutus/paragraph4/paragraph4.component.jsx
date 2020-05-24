import React from "react";
import "./paragraph4.styles.scss";
import Fade from "react-reveal/Fade";
export const Paragraph4 = () => {
  return (
    <div className="paragraph4">
      <Fade bottom>
        <div className="paragraph4-leftside">
          <div className="paragraph4-text">
            <div className="paragraph4-text__title">
              We Are A Family Owned Bussiness
            </div>
            Chris Stevens heads our commercial roofing division and Jim
            McCormick (Frank's son-in-law), heads our residential. Chris has
            over 35 years' and Jim over 25 years' experience with extensive
            knowledge of every type of roof system gained from having been
            installers themselves for decades. We have been able to maintain our
            business since 1973 through our quality control which starts with
            having people with genuine roofing experience evaluate, analyze and
            estimate jobs. When you ask us for an estimate, either Chris or Jim
            will be the ones to do it, giving you the best possible
            recommendations for your particular situation which only their kind
            of comprehensive knowledge, gained through real experience, allows
            them to do. We will never employ salesman, those types who would
            gladly sell customers a toaster oven and more if they could. Our
            commitment to quality control continues with having excellent
            mechanics and being hands-on by physically overseeing that every job
            is done correctly from start to finish. Having Chris and Jim
            involved in the work from estimating to completion in the field,
            just as Frank Stevens did from the beginning of the business,
            certainly hasn't made our lives easy by any means but it has proved
            to be a winning formula for continued success and customer
            satisfaction during all of these years.
          </div>
        </div>
        <div className="paragraph4-rightside">
          <div className="paragraph4-img"></div>
        </div>
      </Fade>
    </div>
  );
};
export default Paragraph4;
