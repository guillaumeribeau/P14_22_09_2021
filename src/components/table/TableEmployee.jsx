import React, { useEffect, useState } from "react";
import firebase from "../../utils/firebaseConfig";
import { TableInstance } from "./TableInstance";

const TableEmployee = () => {
  const [data, setData] = useState([]);
  // get data with firebase
  useEffect(() => {
    const tableDB = firebase.database().ref("create-employee");

    tableDB.on("value", (snapshot) => {
      let previousTable = snapshot.val();
      let list = [];
      for (let id in previousTable) {
        list.push({ id, ...previousTable[id] });
      }

      setData(list);
    });
  }, []);

  return <TableInstance tableData={data} />;
};
export default TableEmployee;
