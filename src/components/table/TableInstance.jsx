import React, { useMemo } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import TableLayout from "./TableLayout";

export const TableInstance = ({ tableData }) => {
  const [columns, data] = useMemo(() => {
    const columns = [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Date of Birth",
        accessor: "birthDate",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ];
    return [columns, tableData];
  }, [tableData]);

  const tableinstance = useTable({ columns, data },
    useGlobalFilter, useSortBy);

  return <TableLayout {...tableinstance} />;
};

export default TableInstance;
