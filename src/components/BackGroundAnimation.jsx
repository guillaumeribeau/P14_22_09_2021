import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const BackGroundAnimation = () => {
  const leftBack = useRef(null);
  const rightBack = useRef(null);
  const rightBackH2 = useRef(null);
  const leftBackH2 = useRef(null);

  useEffect(() => {
    gsap.to(leftBack.current, 2, {
      delay: 1.5,
      left: "-150%",
      ease: "easeInOut",
    });
    gsap.to(leftBackH2.current, 2, {
      delay: 1.5,
      opacity: 0,
      x: -100,
      ease: "easeInOut",
    });
    gsap.to(rightBack.current, 2, {
      delay: 2,
      right: "-150%",
      ease: "easeInOut",
    });
    gsap.to(rightBackH2.current, 2, {
      delay: 2,
      opacity: 0,
      x: +60,
      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="container_background">
      <div className="left_background" ref={leftBack}>
        <h2>Hr</h2>
      </div>
      <div className="right_background" ref={rightBack}>
        <h2>net</h2>
      </div>
    </div>
  );
};

export default BackGroundAnimation;
