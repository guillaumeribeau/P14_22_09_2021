import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/images/home.svg";
import working from "../assets/images/working.png";
import employee from "../assets/images/group.svg";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import teamWork from "../assets/images/teamwork.png"

const Header = () => {
  // const Home = useRef(null);
  // const Employee = useRef(null);
  // const LogoAnim = useRef(null);

  // useEffect(() => {
  //   gsap.from(Home.current, { x: -300, duration: 1 });

  //   gsap.from(Employee.current, { x: 300, duration: 1 });

  //   gsap.from(LogoAnim.current, {
  //     scale: 1.8,
  //    delay:0.2,
  //     duration: 0.8,
  //     rotate: 360,
  //   });
  // }, []);
  
  const [isOpen, setOpen] = useState(false)
  

  return (
    <>
    <div className="wrapper_hamburger">

    <Hamburger rounded color="#FCFCFC" duration={0.7} direction='right' size={40} toggled={isOpen} toggle={setOpen} />

    </div>

    {isOpen ? (
    <a className="menu-item" href="/employee">
        <nav className="header_nav">
        
          Current Employee
        
        <img src={teamWork} alt='team worker icons'/>
      </nav></a>) : ('')}
      
    </>
  );
};

export default Header;
