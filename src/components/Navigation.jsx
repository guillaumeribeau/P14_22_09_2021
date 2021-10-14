import React, { useState } from "react";
import Hamburger from "hamburger-react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const Navigation = ({ title, image, href }) => {
  const [isOpen, setOpen] = useState("close");
  const [hamburger, setHamburger] = useState(false);

  let history = useHistory();
  const returnToLoginPage = () => {
    firebase.auth().signOut();
    history.push({
      pathname: "/login",
    });
  };

  return (
    <>
      <div
        onClick={() => setOpen(isOpen === "close" ? "open" : "close")}
        className="wrapper_hamburger"
      >
        <Hamburger
          rounded
          color="#FCFCFC"
          duration={0.7}
          direction="right"
          size={40}
          toggled={hamburger}
          toggle={() => setHamburger(!hamburger)}
        />
      </div>

      <nav className={`header_nav ${isOpen}`}>
        {title}

        <a href={href}>
          <img src={image} alt="team worker icons" />
        </a>

        <button className="signout-btn" onClick={returnToLoginPage}>
          Sign Out
        </button>
      </nav>
    </>
  );
};

export default Navigation;
