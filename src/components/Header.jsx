import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/images/home.svg";
import working from "../assets/images/working.png";
import employee from "../assets/images/group.svg";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import teamWork from "../assets/images/teamwork.png";

const Header = () => {
  const menu = useRef(null);
  const Employee = useRef(null);
  const LogoAnim = useRef(null);

  const animationNav = () => {
    if (!isOpen) {
      gsap.to(menu.current, { opacity: 1, duration: 1.2,x:0});
    }

    if (isOpen) {
      gsap.to(menu.current, { opacity: 0, duration: 1.2,x:200 });
    }
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div onClick={animationNav} className="wrapper_hamburger">
        <Hamburger
          rounded
          color="#FCFCFC"
          duration={0.7}
          direction="right"
          size={40}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>

      <a  href="/employee">
        <nav ref={menu} className="header_nav">
          Current Employee
          <img src={teamWork} alt="team worker icons" />
        </nav>
      </a>
    </>
  );
};

export default Header;
