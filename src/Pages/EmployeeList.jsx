import React, { useState } from "react";
import Navigation from "../components/Navigation";
import TableEmployee from "../components/table/TableEmployee";
import house from "../assets/images/house.png";
import logo from "../assets/images/logo2.png";

const EmployeeList = () => {
  return (
    <>
      <div className="header_container">
        <a href="/">
          {" "}
          <img className="logo" src={logo} alt="logo de Hrnet" />
        </a>

        <Navigation title="Home" href="/" image={house} />
      </div>
      <div className="container_table">
        <TableEmployee />
      </div>
    </>
  );
};

export default EmployeeList;
