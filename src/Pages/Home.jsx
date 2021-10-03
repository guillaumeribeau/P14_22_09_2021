import Header from "../components/Header";
import Forms from "../components/FormsEmployee.jsx";
import working from "../assets/images/working.png";
import BackGroundAnimation from "../components/BackGroundAnimation";

import logo from "../assets/images/logo2.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {

  return (
    <>
      <h1 className="title">Create a New Employee</h1>
      <img className="logo" src={logo} alt="logo de Kasa" />

      <div className="container_home">
        <Header />
        <div className="forms_container_img">
          <Forms />
          <img className="working_img" src={working} alt="working group" />
        </div>
      </div>
    </>
  );
};

export default Home;
