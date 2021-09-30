import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TableEmployee from "../components/table/TableEmployee";

import firebase from "../utils/firebaseConfig";

const EmployeeList = () => {
  return (
    <div className='container_employee-list'>
      <Header />
      <TableEmployee />
    </div>
  );
};

export default EmployeeList;
