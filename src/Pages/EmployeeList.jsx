import React from "react";
import Header from "../components/Header";
import TableEmployee from "../components/table/TableEmployee";
import house from "../assets/images/house.png";
import logo from "../assets/images/logo2.png";

const EmployeeList = () => {
  return (
    <div className="container_employee-list">
      <a href="/">
        {" "}
        <img className="logo" src={logo} alt="logo de Hrnet" />
      </a>
      <Header title="Home Page" href="/" image={house} />
      <div className="container_table">
        <TableEmployee />
      </div>
    </div>
  );
};

export default EmployeeList;
