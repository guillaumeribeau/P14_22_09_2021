import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo2.png";
import home from "../assets/images/home.svg";
import employee from "../assets/images/group.svg";
import {gsap} from 'gsap'

const Header = () => {

const Home= useRef(null);
const Employee= useRef(null);
const LogoAnim= useRef(null);

useEffect(()=>{

  gsap.from(Home.current, {x:-200,
  delay:1,
  duration:1,
})

  gsap.from(Employee.current, {x:200,
  delay:1,
  duration:1,
})

  gsap.from(LogoAnim.current, {
    scale:1.6,
  delay:1,
  duration:1,
  rotate:360,
})








},[])





  return (
    <>
      <nav className="header_nav">

        <div ref={Home} className="container_img">
          <img src={home} alt="home page" />
          <NavLink to="/" exact activeClassName="nav-active">
            Home
          </NavLink>
        </div>
       <img ref={LogoAnim} className="logo" src={logo} alt="logo de Kasa" />
        <div ref={Employee} className="container_img">
          <img src={employee} alt="home page" />
          <NavLink to="/employee" exact activeClassName="nav-active">
            Current employee
          </NavLink>
        </div>
      </nav>
     
    </>
  );
};

export default Header;
