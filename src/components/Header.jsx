import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import firebase from 'firebase';
import { useHistory } from "react-router-dom";

const Header = ({title,image,href}) => {
  const menu = useRef(null);
  const Employee = useRef(null);
  const LogoAnim = useRef(null);

  const animationNav = () => {
    if (!isOpen) {
      gsap.to(menu.current, { opacity: 1, duration: 1.2,x:-245});
    }

    if (isOpen) {
      gsap.to(menu.current, { opacity: 0, duration: 1.2,x:200 });
    }
  };

  const [isOpen, setOpen] = useState(false);

let history = useHistory()
  const returnToLoginPage= ()=>{
  firebase.auth().signOut();
  history.push({
    pathname: "/login",
  });
  }

  return (
    <>
   <button className='signout-btn' onClick={returnToLoginPage}>Sign Out</button>

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

      <a  href={href}>
        <nav ref={menu} className="header_nav">
          {title} 
          <img src={image} alt="team worker icons" />
        </nav>
      </a>
    </>
  );
};

export default Header;
